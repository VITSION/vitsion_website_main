# How to Set Up MongoDB Atlas & Cloudinary

Follow these steps to get the credentials needed to make your VITSION Admin Panel work permanently on the hosted website.

---

## Part 1: MongoDB Atlas (Database)
*This will store your text data (Events, Films, Contact Messages).*

1.  **Sign Up**
    *   Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
    *   Sign up (you can use your Google account).

2.  **Create a Cluster**
    *   Once logged in, you will be asked to "Deploy your database".
    *   Choose the **M0 Free** (Shared) option.
    *   Select a provider (AWS is fine) and a region close to you (e.g., Mumbai `ap-south-1` if available, or Singapore).
    *   Click **Create Deployment**.

3.  **Create a Database User**
    *   You will see a "Security Quickstart" screen.
    *   **Username**: Enter a username (e.g., `admin`).
    *   **Password**: Enter a secure password (avoid special characters like `@` or `:` if possible to prevent URL formatting issues). **Write this down!**
    *   Click **Create Database User**.

4.  **Allow Network Access**
    *   In the "Network Access" section (still on Quickstart):
    *   Select **"Allow Access from Anywhere"** (or enter `0.0.0.0/0`).
    *   *Why?* This ensures your website hosted on Render/Vercel can reach the database.
    *   Click **Add IP Address**.
    *   Click **Finish and Close**.

5.  **Get the Connection String**
    *   On your Dashboard overview, click the **Connect** button on your Cluster card.
    *   Select **Drivers** (Node.js, Go, Python, etc.).
    *   Ensure **Node.js** is selected.
    *   **Copy the connection string**. It looks like this:
        `mongodb+srv://admin:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`
    *   *Important*: Replace `<password>` in that string with the actual password you created in Step 3.

---

## Part 2: Cloudinary (Image Storage)
*This will store your uploaded images (Posters, Backgrounds).*

1.  **Sign Up**
    *   Go to [https://cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)
    *   Sign up for a free account.

2.  **Get Your Credentials**
    *   Once you log in, you will be taken to the **Dashboard** (or click "Dashboard" in the sidebar).
    *   Look for the section titled **"Product Environment Credentials"** (usually at the top left).
    *   You need to copy these three values:
        1.  **Cloud Name**
        2.  **API Key**
        3.  **API Secret** (Click "Reveal" to see it).

---

## Part 3: What to do next?
Once you have these details, paste them into our chat like this:

**MongoDB:** `mongodb+srv://...`
**Cloudinary:**
*   Cloud Name: `...`
*   API Key: `...`
*   API Secret: `...`

I will then use them to update your `server.js` file to connect everything!
