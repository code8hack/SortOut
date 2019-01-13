from enum import Enum
from typing import Any


class User(object):

    def __init__(self, name: str, email: str, password: str):
        self.name = name
        self.email = email
        self.password = password


class SkillType(Enum):
    cooking = 'cooking'
    knowledge_transfer = 'KT'
    household = 'household'


class Rating(object):

    def __init__(self, rating: int, review=str):
        self.rating = rating
        self.review = review


class Skill(object):

    def __init__(self, skill_type: SkillType, about: str, certified: bool, skill_proof: Any = None):
        self.skill_type = skill_type
        self.about = about
        self.certified = certified
        self.skill_proof = skill_proof
        self.no_of_rating = 0;
        self.ratings = list()

    def add_rating(self, new_rating: Rating):
        self.ratings.append(new_rating)

    def show_avg_rating(self):
        sum = 0
        for r in self.ratings:
            sum = sum + r.rating

        return sum / len(self.ratings)


class ServiceProvider(User):

    def __init__(self, name: str, email: str, password: str, adhar_id: str, contact: str):
        self.adhar = adhar_id
        self.contact = contact
        self.skill_list = list()
        super.__init__(name, email, password)

    def add_skill(self, skill: Skill):
        self.skill_list.append(skill)


class ServiceReciever(User):

    def __init__(self, name: str, email: str, password: str):
        super.__init__(name, email, password)
