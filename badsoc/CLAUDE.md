@AGENTS.md
# BadSoc — Full Product, UI/UX, and Development Context

# Product Vision

BadSoc is a modern mobile-first badminton club management platform designed for organized badminton communities.

The application combines:
- ReClub-style social meet management
- ShuttleFlow-style realtime queueing
- badminton rotation systems
- live court management
- lightweight club operations
- player profiles and rankings
- social stat sharing

BadSoc should feel like:
- a modern badminton community app
- a social badminton hub
- a live queueing platform
- a premium sports-tech application

The platform is designed primarily for:
- badminton clubs
- badminton friend groups
- organized badminton communities
- regular badminton sessions/meets

The application must feel:
- modern
- realtime
- lightweight
- social
- smooth
- fast
- premium
- mobile-first

---

# Core Product Philosophy

BadSoc is NOT just a queueing app.

It is:
- a badminton social platform
- a live queue manager
- a meet organizer
- a player ranking tracker
- a badminton identity/profile system

The app should encourage:
- community interaction
- competitiveness
- fairness
- attendance
- player engagement
- badminton culture

---

# Design Inspiration

The app should visually feel inspired by:
- ReClub
- ShuttleFlow
- Strava
- Discord
- modern sports apps
- premium SaaS dashboards

---

# Main Product Sections
 # BadSoc — Detailed Product Spec, UX, Data Model, and Implementation Notes
BadSoc revolves around 5 core systems:
 This file is the authoritative product + implementation spec for BadSoc. It is intended for product managers, designers, and engineers working on the app. It contains user-facing behavior, UI guidelines, suggested data models (Firestore), API routes, the queue prioritization algorithm, component map, and an MVP roadmap with acceptance criteria.

2. Meets
3. Queueing
4. Player Profiles
5. Social Stat Sharing

---

# 1. CLUB SYSTEM
- admins
- meet history
- rankings
- stats

# Club Home Screen (VERY IMPORTANT)

This should feel similar to ReClub.


# Club Home UI Layout

## Top Header
- club logo
- club name

Buttons:
---


Each meet card displays:
- location
- player count
- queue status
- host/QM

Buttons:
- Request Join
---

Social activity feed.

- “Ivan reached Level B”
- “Saturday Queue is now open”
This section should feel social and engaging.

# 2. MEET SYSTEM
A meet is the core badminton session/event.

Examples:
- Saturday Competitive Queue
- Wednesday Casual Games
- Beginner Sunday Session
- Level A/B Night

---

# Meet Creation System

Admins/QMs can create meets.

---

# Meet Creation Form UI

The UI should resemble modern event apps.

Use:
- large cards
- segmented controls
- bottom sheets on mobile

---

# Meet Creation Fields

## Basic Information
- meet title
- description
- banner image
- venue/location
- Google Maps link optional

---

## Schedule
- date
- start time
- end time

---

## Court Configuration
- number of courts
- queue mode
- rotation settings

---

## Capacity Configuration
- max players
- waitlist enabled
- auto-promote waitlist

---

## Skill Restrictions
- minimum level
- maximum level

Examples:
- Level A/B Competitive
- Level C/D Casual
- Beginner E Session

---

## Pricing Settings

Pricing modes:
- free
- per meet
- per game

Example:
- ₱20/game

---


---
## Top Hero Section
- banner image
- meet title
- host/QM
- date/time
- location
- level restriction
- queue status

Buttons:
- Request Join
---

## Meet Stats Section
Display:
- approved players
- waitlisted players
- courts
- estimated games
- meet status

---

## Players Section

Display player avatars in grid format.

Each player card displays:
- profile picture
- name
- level badge
- games played

---

## Queue Preview Section
---

The queueing logic must mimic actual badminton culture.

# Queue States

- playing
- inactive
- left session

---
Prioritize:
1. longest waiting players
4. avoid repeated teammates
5. avoid repeated opponents
# Queue Screen UI
Route:
/meet/[meetId]/queue

This screen should feel:
- realtime
- responsive
- smooth
- readable from distance

---

# Queue Screen Layout

## Top Sticky Header
Display:
- meet name
- live player count
- active courts

Buttons:
- Join Queue


Each court card displays:
- court number
- players
- timer
- current score
- match status

Buttons:
- Start Match
- End Match

---

# Queue List

Realtime sortable list.

Each player row displays:
- avatar
- name
- level badge
- games played
- wait duration
- current status

Visual indicators:
- glowing border if next
- pulsing animation if called

---

# Queue UX Behavior

The queue should:
- update instantly
- animate smoothly
- avoid page refreshes
- support drag-and-drop
- support swipe gestures on mobile

---

# 4. PLAYER PROFILE SYSTEM

Players should feel like they have a badminton identity.

This is VERY IMPORTANT for engagement.

---

# Player Profile Page

Route:
/profile/[userId]

---

# Profile Header UI

Display:
- profile picture
- customizable banner image
- badminton level
- club role
- attendance streak

Buttons:
- Share Stats
- Edit Profile

---

# Profile Statistics

Display:
- matches played
- wins
- losses
- win rate
- games today
- queue participation
- attendance rate

---

# Match History

Display:
- recent matches
- teammates
- opponents
- match results

---

# Social Features

Players should be able to:
- post achievements
- share rankings
- share meet performance
- customize stat cards

---

# 5. SOCIAL STAT SHARING SYSTEM (VERY IMPORTANT)

BadSoc should include a shareable badminton stat system similar to:
- Spotify Wrapped
- Strava shares
- gaming stat cards

This feature is extremely important for engagement and virality.

---

# Shareable Stats Cards

Players can generate beautiful shareable cards.

---

# Share Card Features

Players can customize:
- background image
- gradient theme
- player photo
- badminton level badge
- favorite quote
- emojis/stickers

---

# Shareable Statistics

Cards can display:
- current level
- win rate
- games played
- meet MVP
- attendance streak
- queue rank
- recent achievements

---

# Example Share Cards

## Meet Summary Card
“Won 6 games at Saturday Queue 🔥”

---

## Ranking Card
“Reached Level B 🏸”

---

## Attendance Card
“10-week badminton streak”

---

# Share Card UI Requirements

The editor should feel modern and social.

Features:
- drag positioning
- live preview
- gradient selectors
- image upload
- animated backgrounds optional

---

# Export Options

Players should be able to:
- save image
- share to Instagram stories
- share to Facebook
- share to Messenger

---

# Social Feed System

Club home should include a realtime social feed.

Feed items:
- meet announcements
- player achievements
- stat shares
- rankings
- attendance milestones

---

# MOBILE-FIRST DESIGN (EXTREMELY IMPORTANT)

BadSoc is primarily a mobile application.

Everything must be optimized for:
- phones
- portrait mode
- one-hand use

---

# Mobile UI Requirements

Buttons:
- large
- thumb reachable
- high contrast

Spacing:
- breathable
- uncluttered

Animations:
- smooth
- subtle
- fast

---

# Bottom Navigation (ReClub Inspired)

Mobile app should use bottom navigation.

Tabs:
- Home
- Meets
- Queue
- Feed
- Profile

---

# UI Style Guide

The application should feel:
- sporty
- social
- modern
- premium
- clean

---

# Visual Design Language

Use:
- glassmorphism lightly
- rounded cards
- gradients
- large typography
- soft shadows

---

# Color System

Primary:
- emerald green
- dark slate
- white

Accent Colors:
- red for Level A
- orange for Level B
- yellow for Level C
- green for Level D
- gray/blue for Level E

---

# Realtime System Requirements

All systems must update instantly:
- queue changes
- court assignments
- approvals
- player joins
- social feed updates

No manual refreshes.

---

# QR Join System (Future)

Players should eventually join meets via:
- QR codes
- invite links

Flow:
1. Scan QR
2. Open meet
3. Login
4. Request join
5. Approved/waitlisted

---

# Recommended Tech Stack

Frontend:
- Next.js 15
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion

Backend:
- Firebase Auth
- Firestore
- Firebase Cloud Messaging

State Management:
- Zustand

---

# Database Collections

- clubs
- users
- meets
- meetRequests
- meetMembers
- waitlists
- queues
- courts
- matches
- payments
- socialPosts
- statCards
- achievements

---

# MVP Development Priority

## Phase 1
Authentication
Meet creation
Meet requests
Club home

---

## Phase 2
Realtime queue system
Court management
Queue logic

---

## Phase 3
Player profiles
Social feed
Shareable stat cards

---

## Phase 4
QR joins
Advanced matchmaking
Analytics

---

# Final Product Goal

BadSoc should feel like the definitive modern badminton community platform.

The app should:
- reduce admin workload
- improve queue fairness
- increase community engagement
- make badminton sessions smoother
- encourage player interaction
- create a strong badminton identity/community culture.

Yep — this is a good upgrade because it turns your app from just “queue management” into an actual competitive badminton identity system.

Here’s the corrected + more detailed version you can directly paste into your Copilot .md.

⸻

BadSoc — Updated Stats System (Win/Loss, Win Rate, Share Cards Integration)

Player Statistics System (UPDATED)

BadSoc includes a full competitive stats tracking system for each player.

This system tracks performance across:

* meets
* matches
* queue sessions
* court games

The goal is to give every player a clear badminton identity and progression system.

⸻

Core Stats Tracking

Each player profile must track the following:

Match Results

Required Fields:

* total matches played
* total wins
* total losses

⸻

Win Rate (IMPORTANT)

Win rate must be automatically calculated.

Formula:

Win Rate (%) = (Wins / Total Matches) × 100

Example:

* Wins: 12
* Losses: 8
* Total Matches: 20

Win Rate = 60%

⸻

Additional Stats (Optional but Recommended)

* total games played
* games won per meet
* average games per session
* longest win streak
* current win streak
* attendance rate
* queue participation rate

⸻

Player Stats Page UI

Route:
/profile/[userId]

⸻

Header Section

Display:

* profile picture
* player name
* Level badge (A–E)
* club role (Player / QM / Admin)

⸻

Main Stats Card (IMPORTANT UI COMPONENT)

This is the most important section visually.

Layout:

------------------------------------------------
 MATCH STATS
------------------------------------------------
Wins:        12
Losses:      8
Total Games: 20
WIN RATE:    60% 🔥
------------------------------------------------

⸻

Visual Enhancements

Win rate should be shown using:

* circular progress indicator OR
* horizontal progress bar

Color rules:

* 70%+ → green
* 50–69% → yellow
* below 50% → red

⸻

Secondary Stats Section

Display cards:

* 🏸 Matches Played
* 🔥 Current Win Streak
* 📊 Attendance Rate
* ⏱ Average Queue Time
* 🤝 Favorite Partner (optional)

⸻

Match History Section

Each match item shows:

* opponent team
* teammate
* result (WIN / LOSS)
* score (optional)
* date
* meet name

⸻

Share Cards System (UPDATED)

BadSoc includes a social sharing system similar to:

* Strava cards
* Spotify Wrapped
* gaming stat summaries

⸻

Share Card Content (UPDATED)

Players can generate shareable stat cards that include:

Core Stats (Required)

* total wins
* total losses
* win rate (%)
* total matches played
* current level (A–E)

⸻

Example Share Card Data

🏸 BadSoc Stats
Player: Yumi
Level: B
Matches Played: 20
Wins: 12
Losses: 8
🔥 Win Rate: 60%

⸻

Share Card Visual Customization

Players can personalize their cards:

Background Options:

* solid color gradients
* badminton court image backgrounds
* club-themed backgrounds
* uploaded personal images

⸻

Visual Controls:

* adjust background brightness
* blur background image
* add overlays (dark/light)
* choose accent color theme

⸻

Layout Options:

* compact stats card
* full detailed stats card
* highlight win rate only mode
* “achievement style” card

⸻

Share Card UI Editor

Route:
/share-card-builder

⸻

Editor Features

Players can:

* upload background image
* drag stat elements
* toggle stats visibility
* change theme colors
* preview in real time

⸻

Live Preview Section

Always show:

* mobile preview (default)
* Instagram story format preview
* square post format preview

⸻

Share Output Formats

Players can export:

* PNG image
* download to device
* share to:
    * Instagram Stories
    * Messenger
    * Facebook
    * WhatsApp

⸻

Social Feed Integration (IMPORTANT)

When a player shares a stat card:

It should automatically generate a post in the club feed:

Example:

“Yumi just reached a 60% win rate 🔥”

or

“Yumi shared their BadSoc stats card”

⸻

Database Updates (IMPORTANT)

Update user schema:

wins: number
losses: number
matchesPlayed: number
winRate: number // computed or cached
currentWinStreak: number
bestWinStreak: number

⸻

Match Completion Logic

When a match ends:

System must update:

* winner team → +1 win per player
* loser team → +1 loss per player
* increment matchesPlayed
* recalculate winRate
* update streaks

⸻

Design Philosophy

This system should make players feel:

* progression (getting better over time)
* competitiveness
* pride in performance
* motivation to join more meets

But it must remain:

* simple
* readable
* not overwhelming

⸻

Important UX Rule

Stats should always be:

* visible in queue
* visible in profile
* visible in share cards

So players constantly see their progress during gameplay.

⸻

Final Goal

Turn BadSoc into not just a queueing system, but a badminton identity platform, where every player has:

* measurable performance
* shareable achievements
* visible progression
* social recognition inside the club

⸻