# BEGIN CODE HERE
from flask import Flask, request, jsonify, json
from flask_pymongo import PyMongo
from flask_cors import CORS
from pymongo import TEXT
# END CODE HERE

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017/pspi"
CORS(app)
mongo = PyMongo(app)
mongo.db.products.create_index([("name", TEXT)])


@app.route("/search", methods=["GET"])
def search():
    # BEGIN CODE HERE

    search_text = request.args.get('name', '')

    if not search_text:
        return jsonify([])
    results = mongo.db.products.find({"name": {"$regex": search_text, "$options": "i"}}).sort('price',-1)

    response = []

    for result in results:
        response.append({
            'id': str(result['_id']),
            'name': result['name'],
            'production_year': result['production_year'],
            'price': result['price'],
            'color': result['color'],
            'size': result['size']
        })
    # response.reverse()
    json_string = json.dumps(response, sort_keys=False)
    return json_string

    # END CODE HERE


@app.route("/add-product", methods=["POST"])
def add_product():
    # BEGIN CODE HERE
    data = None

    if request.headers.get('Content-Type') == 'application/json':
        data = request.get_json()
    else:
        data = request.args.to_dict()

    if data is None:
        return "Invalid data", 400

    # Access data as dictionary
    new_product = {}
    new_product["name"] = data.get('name')
    new_product["production_year"] = int(data.get('production_year'))
    new_product["price"] = int(data.get('price'))
    new_product["color"] = int(data.get('color'))
    new_product["size"] = int(data.get('size'))

    exists = mongo.db.products.find_one({"name": new_product["name"]})
    if exists is None:
        mongo.db.products.insert_one(new_product)
        return "OK"
    else:
        mongo.db.products.update_one({"name": new_product["name"]}, {"$set": {"production_year": new_product["production_year"],"price": new_product["price"],"color": new_product["color"],"size": new_product["size"]}})
        return "Update Made"

    # END CODE HERE


@app.route("/content-based-filtering", methods=["POST"])
def content_based_filtering():
    # BEGIN CODE HERE
    return ""
    # END CODE HERE


@app.route("/crawler", methods=["GET"])
def crawler():
    # BEGIN CODE HERE
    semester = int(request.args.get('semester'))

    options = Options()
    options.headless = True
    driver = webdriver.Chrome(options=options)

    driver.get("https://qa.auth.gr/el/x/studyguide/600000438/current")

    res = []
    try:
        # Εύρεση των μαθημάτων για το συγκεκριμένο εξάμηνο με τη σωστή τάξη ή id
        table_id = "exam" + str(semester)  # Δημιουργία του σωστού id του πίνακα βάσει του εξαμήνου
        table = driver.find_element(By.ID, table_id)  # Εύρεση του πίνακα με το σωστό id
        rows = table.find_elements(By.TAG_NAME, "tr")[1:]  # Εύρεση όλων των γραμμών του πίνακα εκτός από την πρώτη

        for row in rows:
            # Εύρεση του ονόματος του μαθήματος, εάν υπάρχει
            title_elements = row.find_elements(By.CLASS_NAME, "title")  # it returns list
            if title_elements:  # Ελέγχει αν το list δεν είναι άδειο
                title = title_elements[0].text  # Χρησιμοποιεί την ιδιότητα 'text'
                if title:
                    res.append(title)
    except Exception as e:
        print(str(e))


    driver.quit()
    return jsonify(res), 200
    # END CODE HERE
