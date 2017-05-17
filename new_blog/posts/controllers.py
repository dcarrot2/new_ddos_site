from flask import Blueprint, render_template, request

posts = Blueprint('post', __name__, url_prefix='/api')

@posts.route('/test', methods=['GET'])
def test():
    

@posts.route('/super-secret', methods=['GET', 'POST'])
def super_secret():
    return True
