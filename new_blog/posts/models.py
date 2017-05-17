from app import db

class Base(db.Model):

    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    date_created = db.Column(db.DateTime, default=db.func.current_timestamp())
    date_modified = db.Column(db.DateTime, default=db.func.current_timestamp(),
                                        onupdate=db.func.current_timestamp())

class Post(db.Model):

    __tablename__ = 'posts'

    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(200, nullable=False)
    body = db.Column(db.String(20000), nullable=False)


    def __init__(self, title, subtitle, body):
        self.title = title
        self.subtitle = subtitle
        self.body = body
