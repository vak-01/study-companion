## WHAT IS THIS PROJECT?
This project is a web application, that is designed to 
- let users study effectively by using flashcards, since flashcards have proven to be an effective learning tool.
- share the flashcards they create with their friends on the site.
- set learning goals
- leverage AI assistance for learning.

## How to run the project.
1. Clone the repository 
   ```
   git clone https://github.com/vak-01/study-companion.git
   ```

2. Enter the project directory - `cd study-companion`

3. Create a python virtual environment
   ```
   python -m venv env
   ```

4. Activate and install the required python packages
   ```
   env\scripts\activate.bat (Windows)
   pip install -r requirements.txt
   ```

5. Enter the frontend folder and install the packages for frontend
   ```
   npm i
   ```

6. Enter the root directory of repo and create a `.env` file

7. The `.env` file is to store secrets. Given below are the secret values that the app needs

   ```
   DB_ENGINE=django.db.backends.mysql
   DB_NAME=< database name >
   DB_USER=< username >
   DB_PASSWORD=< password >
   DB_HOST=localhost
   DB_PORT=3306
   DJANGO_SECRET_KEY= < found in settings.py >
   ```

8. Enter the backend directory and make the initial migrations in django

   ```
   python manage.py makemigrations
   ```

9. Apply the migrations
    ```
    python manage.py migrate
    ```

10. Start the backend development server at port 8000 (by default)
    ```
    python manage.py runserver
    ```

11. Start the frontend development server at port 5173
    ```
    npm run dev
    ```
    
   ## Tech stack used

  - Frontend
      - React
      - Vite
      - Tailwind CSS
  - Backend
      - Django
      - Django rest framework
  - Database
      - MySQL
  - Rich text editor
      - Quill text editor.
  - Web utilities
      - Preline UI
      - Heropatterns
        
