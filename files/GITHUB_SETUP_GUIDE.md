# GitHub Setup Guide for Learn with Lane

You're going to create a GitHub repository and upload the Learn with Lane folder structure. This is easier than you think.

## Prerequisites

Download and install (if you don't have them):

1. **Git** (version control software)
   - Windows: https://git-scm.com/download/win
   - Mac: https://git-scm.com/download/mac
   - Linux: `sudo apt install git`

2. **GitHub Account**
   - Go to https://github.com/signup
   - Sign up with email

## Step 1: Create a New GitHub Repository

1. Go to **https://github.com** and log in
2. Click the **"+"** icon in top right → **"New repository"**
3. Fill in:
   - **Repository name**: `learn-with-lane`
   - **Description**: `Learn with Lane tutoring website`
   - **Public** (choose this)
   - Check **"Add a README file"**
4. Click **"Create repository"**

You now have an empty repo at `https://github.com/YOUR_USERNAME/learn-with-lane`

## Step 2: Download the lwl-netlify Folder

1. You should have a folder called `lwl-netlify` in your outputs
2. Download it to your computer (save somewhere you can find it)

## Step 3: Open Terminal/Command Prompt

**Windows:**
- Press **Windows key + R**
- Type `cmd` and press Enter

**Mac:**
- Press **Command + Space**
- Type `terminal` and press Enter

**Linux:**
- Open your terminal application

## Step 4: Navigate to Your Folder

In the terminal, type:

```bash
cd path/to/your/lwl-netlify/folder
```

For example, if it's on your Desktop:
```bash
cd Desktop/lwl-netlify
```

Press Enter.

## Step 5: Initialize Git (One Time Only)

Type these commands one at a time, pressing Enter after each:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"
```

Replace with your actual name and email.

## Step 6: Connect Your Folder to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/learn-with-lane.git
```

Press Enter.

## Step 7: Upload Your Code to GitHub

Type these three commands in order, pressing Enter after each:

```bash
git add .
```

```bash
git commit -m "Initial Learn with Lane website"
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

This will prompt you to log in to GitHub. Use your GitHub username and password.

**Wait 30 seconds.** You're uploading all the files.

## Step 8: Verify on GitHub

1. Go to **https://github.com/YOUR_USERNAME/learn-with-lane**
2. You should see all your folders:
   - `src/`
   - `public/`
   - `netlify.toml`
   - `package.json`
   - `README.md`
   - etc.

✅ **Success!** Your code is on GitHub.

---

## What Just Happened?

You took the `lwl-netlify` folder from your computer and uploaded it to GitHub. Now it's stored in the cloud and version-controlled.

**Each file you see on GitHub** = the actual file in your folder.

---

## Next: Deploy to Netlify

Once your code is on GitHub, go to **https://netlify.com**:

1. Sign up (free)
2. Click **"New site from Git"**
3. Choose **GitHub** (authorize if needed)
4. Select **learn-with-lane** repo
5. Click **"Deploy"**

Netlify will:
- Build your React app
- Deploy it live
- Give you a URL like `https://vibrant-hopper-a1b2c3.netlify.app`

---

## Making Changes Later

If you want to change something (edit text, add images, etc.):

1. **Edit the file** on your computer (e.g., open `src/pages/Home.js` in a text editor)
2. **Save the file**
3. **In terminal** (in the `lwl-netlify` folder), type:

```bash
git add .
git commit -m "Updated home page"
git push
```

4. **Netlify automatically rebuilds and deploys** (takes ~2 minutes)

---

## Troubleshooting

**"Command not found: git"**
→ Git isn't installed. Download from https://git-scm.com

**"fatal: not a git repository"**
→ Make sure you're in the `lwl-netlify` folder in terminal
→ Run `pwd` to see where you are

**"Authentication failed"**
→ Use your GitHub username and personal access token (not password)
→ Go to GitHub → Settings → Developer settings → Personal access tokens
→ Generate a new token, copy it, paste when terminal asks for password

**"Everything looks wrong on GitHub"**
→ Refresh the page (Ctrl+R or Cmd+R)
→ Sometimes GitHub takes a few seconds to update

---

## You're Done With GitHub Setup

Your code is safe in the cloud and ready to deploy to Netlify.

Next step: Follow the **NETLIFY_DEPLOY_GUIDE.md** to get your site live.

Questions? The terminal output usually tells you exactly what went wrong. Copy/paste the error message into Google and you'll find answers.

You've got this. 🚀
