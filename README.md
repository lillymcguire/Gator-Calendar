# Gator-Calendar

# Initial set up
1. Install python3
2. Create virtual environment in root project directory and activate virtual environment, information at https://docs.python.org/3/library/venv.html
3. After activating environment, install from requirements.txt in the current directory
```console
foo@bar:~$ pip install -r /path/to/requirements.txt -f file:///path/to/archive/
```
4. Install Node at https://nodejs.org/en/download/

# How to run:
1. You need two terminals, for the first terminal, navigate to frontend directory and run
```console
foo@bar:~$ npm run dev
```
2. For the second terminal, navigate to backend directory and run
```console
foo@bar:~$ python manage.py runserver
```
