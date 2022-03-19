from app import db
from flask_login import UserMixin


class student_users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(80),  nullable=False)
    name = db.Column(db.String(100), nullable=False)
    education_level = db.Column()  #drop down element - need to store
    student_email = db.Column(db.String(100), nullable=False)
    student_class = db.Column()
    teacher_id = #How do we accomplish on the teachers end multiple student relations?
    teacher_name = db.Column(db.String(100))
    teacher_email =db.Column(db.String(100))
    pre_lang_teacher = #using JS elements and forms elements we can set this to be a dropdown but how does that data get sent to store?
    parent_id = db.Column(db.Integer, db.ForeignKey("parent_users.id", ondelete="CASCADE"))
    parent_name = db.Column(db.String(100))
    parent_email = db.Column(db.String(100))
    pre_lang_parent =  
    friend = db.relationship(
        "create_friend", backref="student_users", lazy=True, passive_deletes=True
    )


class parent_users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    parent_name = db.Column(db.String(100), nullable=False)
    parent_email = db.Column(db.String(100), nullable=False)
    pre_lang_parent =  
    education_level = 
    child = db.relationship(
        "student_users", backref="parent_users", lazy=True, passive_deletes=True
    )

class teacher_users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    parent_name = db.Column(db.String(100), nullable=False)
    parent_email = db.Column(db.String(100), nullable=False)
    pre_lang_parent =  
    education_level = 
    student = db.relationship(
        "student_users", backref="parent_users", lazy=True, passive_deletes=True
    )

class create_friend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    friend_name = dbColumn(db.String(100), nullable=False)
    starting_ai_knowledge = dbColumn()
    student = db.Column(db.Integer, db.ForeignKey("student_users.id", ondelete="CASCADE"))

