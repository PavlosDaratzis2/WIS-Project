# BEGIN CODE HERE
from flask import Flask, request, jsonify
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

    results = mongo.db.products.find({"name": {"$regex": search_text, "$options": "i"}}).sort('price')

    response = []

    for result in results:
        response.append({
            'id':(result['id']),
            'name': result['name'],
            'production_year': result['production_year'],
            'price': result['price'],
            'color': result['color'],
            'size': result['size']
        })

    response.reverse()

    return jsonify(response)

     # END CODE HERE


@app.route("/add-product", methods=["POST"])
def add_product():
    # BEGIN CODE HERE
    new_person = {}
    new_person["id"] = request.args.get('id')
    new_person["name"] = request.args.get('name')
    new_person["production_year"] = request.args.get('production_year')
    new_person["price"] = request.args.get('price')
    new_person["color"] = request.args.get('color')
    new_person["size"] = request.args.get('size')
    print(new_person)
    
    # the find One returns the first document that matches your query criteria or null
    exists = mongo.db.products.find_one({"name": new_person["name"]})
    if exists is None:
        mongo.db.products.insert_one(new_person)
        return "Addition Made"
    else:
        mongo.db.products.update_one({"name": new_person["name"]}, {"$set": {"id": new_person["id"],"production_year": new_person["production_year"],"price": new_person["price"],"color": new_person["color"],"size": new_person["size"]}})
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
    if(5>8):
        return True
    else:
        return ""
    # END CODE HERE
