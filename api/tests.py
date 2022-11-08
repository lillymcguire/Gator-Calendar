from django.test import TestCase
from api.models import Calendar
from django.contrib.auth.models import User

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="lion", email="user1@gmail.com")

    def test_username_and_email(self):
        print("\nTesting username and email values")
        user = User.objects.get(username="lion")
        self.assertEqual(user.username, 'lion')
        self.assertEqual(user.email, 'user1@gmail.com')

class CalendarTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="lion", email="user1@gmail.com")
        user = User.objects.get(username="lion")
        Calendar.objects.create(title="calendar1", is_public=True, creator=user)

    def test_calendar_attributes(self):
        print("\nTesting calendar object values")
        user = User.objects.get(username="lion")
        cal1 = Calendar.objects.get(title="calendar1", creator=user)
        self.assertEqual(cal1.creator.username, 'lion')
        self.assertEqual(cal1.title, 'calendar1')


class CleanUpTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="lion", email="user1@gmail.com")
        user = User.objects.get(username="lion")
        Calendar.objects.create(title="calendar1", is_public=True, creator=user)

    def test_clean(self):
        print("\nTesting delete functionality ... ")
        user = User.objects.get(username="lion")
        cal1 = Calendar.objects.get(title="calendar1", creator=user)
        print("Deleting user object and calendar object")
        user.delete()


        print("Attempting to retrieve object: ")
        try:
            user = User.objects.get(username="lion")
        except:
            print("User successfully deleted")
        else:
            print("User not deleted")

        try:
            cal1 = Calendar.objects.get(title="calendar1")
        except:
            print("Calendar successfully deleted")
        else:
            print("Calendar not deleted")