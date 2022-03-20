from app import db
from flask_login import UserMixin


class student_users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    education_level = db.Column(db.String(50))  #drop down element - need to store
    student_email = db.Column(db.String(100), nullable=False)
    student_class = db.relationship(
        "teacher_users", backref="student_users", lazy=True, passive_deletes=True
    )
    parent_id = db.relationship(
        "parent_users", backref="student_users", lazy=True, passive_deletes=True
    )
    parent_name = db.Column(db.String(100))
    parent_email = db.Column(db.String(100))
    parent_phone = db.Column(db.String(10), nullable=False)
    pre_lang_parent = db.Column(db.String(50),  nullable=False)
    friend = db.relationship(
        "create_friend", backref="student_users", lazy=True, passive_deletes=True
    )


class parent_users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    parent_name = db.Column(db.String(100), nullable=False)
    parent_email = db.Column(db.String(100), nullable=False)
    parent_phone = db.Column(db.String(10), nullable=False)
    pre_lang_parent = db.Column(db.String(50),  nullable=False)
    understanding_level = db.Column(db.String(50))
    pref_text = db.Column(db.Boolean, nullable=False)
    pref_email = db.Column(db.Boolean, nullable=False)
    child = db.Column(db.Integer, db.ForeignKey("student_users.name", ondelete="CASCADE"))

class teacher_users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    teacher_name = db.Column(db.String(100), nullable=False)
    teacher_email = db.Column(db.String(100), nullable=False)
    pre_lang_teacher = db.Column(db.String(100))
    classroom_grade_level = db.Column(db.String(100), nullable=False)
    teacher_phone = db.Column(db.String(10), nullable=False)
    classroom_id = db.Column(db.String(50), db.ForeignKey("parent_users.id", ondelete="CASCADE"))

class create_friend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    friend_name = db.Column(db.String(100), nullable=False)
    starting_ai_knowledge = db.Column(db.String(20))
    student = db.Column(db.Integer, db.ForeignKey("student_users.id", ondelete="CASCADE"))

class scores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    parent = db.Column(db.Integer, db.ForeignKey("parent_users.id", ondelete="CASCADE"))
    student = db.Column(db.Integer, db.ForeignKey("student_users.id", ondelete="CASCADE"))
    assessment = db.Column(db.String(20), nullable=False)
    score = db.Column(db.Integer, nullable=False)
class notifications(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type_sms = db.Column(db.Boolean, nullable=False)
    sent = db.Column(db.DateTime, nullable=False)
    confirmed = db.Column(db.DateTime, nullable=False)
    parent = db.Column(db.Integer, db.ForeignKey("parent_users.id", ondelete="CASCADE"))
    student = db.Column(db.Integer, db.ForeignKey("student_users.id", ondelete="CASCADE"))