import os
from sys import stdout
from flask import Flask
from logging import StreamHandler

def create_app():
    from views.index import index_view

    app = Flask(__name__, template_folder='./client')

    #API blueprint needs to registered before this so that it
    #takes precedence. See http://stackoverflow.com/questions/30620276/flask-and-react-routing
    app.register_blueprint(index_view)

    handler = StreamHandler(stdout)
    app.logger.addHandler(StreamHandler)

    return app
