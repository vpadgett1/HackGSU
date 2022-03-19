from app import db
from flask_login import UserMixin


class student_users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    education_level = db.Column()  #drop down element - need to store
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
    parent_name = db.Column(db.String(100), nullable=False)
    parent_email = db.Column(db.String(100), nullable=False)
    parent_phone = db.Column(db.String(10), nullable=False)
    pre_lang_parent = db.Column(db.String(50),  nullable=False)
    understanding_level = db.Column(db.String(50))
    child = db.Column(db.Integer, db.ForeignKey("student_users.name", ondelete="CASCADE"))

class teacher_users(USerMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    teacher_name = db.Column(db.String(100), nullable=False)
    teacher_email = db.Column(db.String(100), nullable=False)
    pre_lang_teacher = db.Column(db.String(100))
    classroom_grade_level = db.Column(db.String(100), nullable=False)
    teacher_phone = db.Column(db.String(10), nullable=False)
    classroom_id = db.Column(db.String(50), db.ForeignKey("parent_users.id", ondelete="CASCADE"))

class create_friend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    friend_name = dbColumn(db.String(100), nullable=False)
    starting_ai_knowledge = dbColumn()
    student = db.Column(db.Integer, db.ForeignKey("student_users.id", ondelete="CASCADE"))

class notifications(db.Model):
    