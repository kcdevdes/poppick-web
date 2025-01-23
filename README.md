# ⚡ PopPick

PopPick is a tournament-based match game site integrated streaming platforms like Twitch, Chzzk(치지직), or SOOP
to promote real-time interaction between streamers and viewers.
This project allows users to create and participate in tournaments
and enables streamers and viewers to interact and vote through live chat.

## 📝 Project Overview

### Project Goals

- Use broadcasting platforms' API to synchronize live chat, voting, and reaction data to enhance streamer-viewer interaction.
- Allow users to create and participate in tournament-style matches.

### Key Features

- **Login**: Authentication via Google, Apple, Kakao, and Naver(Korean Search Engine).
- **Match Features**:
  - Create, edit, and delete matches.
  - Real-time match voting.
  - Match recommendation (like/dislike) and comments.
- **Ranking**: Display of popular and recent match rankings.

## 🛠️ Tech Stack

- **Frontend**: Next.js
- **Backend**: Spring Boot
- **Database**: PostgreSQL

## 🏗️ Architecture Design

### System Structure

- **Frontend**: A SPA (Single Page Application) built with Next.js.
- **Backend**: API server built with Spring Boot.
- **Database**: PostgreSQL hosted on Amazon RDS.

## 📋 Feature Details

1. **Match Creation/Participation/Deletion**
   - Create tournament matches with a minimum of 8 options (16 participants) and a maximum of 128 options (256
     participants).
   - Real-time voting for viewer participation in matches.
2. **Comments and Recommendations**
   - Users can leave comments on matches and vote to like or dislike them.
3. **Ranking System**
   - Popular and recent matches are displayed based on user activity.

## 🏃 How can I run PopPick on my computer?

```bash
$ git clone https://github.com/kcdevdes/poppick-web.git # clone repository
$ cd poppick-web # move to the folder
$ npm install # install dependency
$ npm run start
```
