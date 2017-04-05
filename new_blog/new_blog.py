import os
import sqlite3
from flask import Flask, request, session, g, redirect, url_for, abort, \
        render_template, flash

app = Flask(__name__)
app.config.from_object(__name__)

app.config.update(dict(
    DATABASE=os.path.join(app.root_path, 'new_blog.db'),
    SECRET_KEY='development',
    USERNAME='admin',
    PASSWORD='default'
))
app.config.from_envvar('NEW_BLOG_SETTINGS', silent=True)

