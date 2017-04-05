from flask import render_template, Blueprint

index_view = Blueprint('index', __name__)

@index_view.route('/', defaults={'path': ''})
@index_view.route('/<path:path>')
def index(path):
    return render_template('index.html')
