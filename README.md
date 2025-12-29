# DinoExplorer: Chronicles of the Wild

## 1. Overview

**DinoExplorer: Chronicles of the Wild** is a mobile scientific-adventure game where players explore prehistoric biomes, discover real dinosaur species, and complete a living scientific encyclopedia.

The MVP focuses on a simple but polished exploration loop, online connectivity from day one, and a scalable architecture ready for future expansion.

### Players will:
- Create their explorer character  
- Travel to a prehistoric biome  
- Encounter real dinosaur species  
- Use the **Enchantment** ability to calm and study creatures  
- Collect **Scientific Cards**  
- Progress toward completing the **Primeval Encyclopedia**

The game blends entertainment with real paleontological knowledge.

---

## 2. Gameplay (MVP Scope)

The MVP includes:
- Character creation (basic customization)  
- One initial biome (**Jurassic Forest**)  
- 1–3 dinosaur species available for encounters  
- Basic **Enchantment** mechanic *(calm → observe → register)*  
- **Scientific Cards** system  
- Online backend for:
  - Player profile  
  - Encyclopedia progress  
  - Species data  

### Simple Expedition Loop:
1. Receive a species card  
2. Travel to biome  
3. Encounter dinosaur  
4. Enchant and register  
5. Update encyclopedia  

> No base building, no climate events, no advanced systems yet.

---

## 3. Technology Stack

### Mobile
- React Native (CLI)  
- TypeScript  
- React Navigation (Native Stack)  
- Clean Architecture (strict)  
- Axios (API client)  
- Zustand or Jotai (lightweight state management)  
- MMKV (local cache)  

### Backend
- Node.js + TypeScript  
- Express.js (REST API)  
- PostgreSQL  
- Prisma ORM  
- Swagger / OpenAPI documentation  
- API versioning (v1)  

### DevOps
- GitHub Actions (CI)  
- Jest (tests)  
- ESLint + Prettier  
- Conventional Commits  

---

## 4. Architecture — Clean Architecture

### Presentation Layer
- Screens  
- Components  
- Navigation  
- Hooks  
- ViewModels / Controllers  

### Domain Layer
- Entities  
- Value Objects  
- Use Cases  
- Repository Interfaces  

### Data Layer
- API clients  
- DTOs  
- Mappers  
- Repositories (implementing domain interfaces)  
- Local cache (MMKV)  

### Infra Layer (Backend)
- Routes  
- Controllers  
- Services  
- Repositories  
- Database models  

---

## 5. Folder Structure (Mobile)

```text
src
├─ presentation
│  ├─ screens
│  ├─ components
│  ├─ navigation
│  ├─ viewmodels
│  └─ hooks
├─ domain
│  ├─ entities
│  ├─ valueObjects
│  ├─ usecases
│  └─ repositories
├─ data
│  ├─ api
│  ├─ datasources
│  ├─ repositories
│  ├─ mappers
│  ├─ dto
│  └─ cache
├─ infra
│  ├─ storage
│  └─ config
└─ app
   ├─ theme
   ├─ utils
   └─ types
````

---

## 6. Online-First Strategy (MVP)

Since the MVP is online from the beginning, the mobile app will:

* Fetch species, biome, and card data from the backend
* Store minimal local cache for:

  * Last fetched species list
  * Player profile
  * Encyclopedia progress snapshot

### Internet Required For:

* Logging in (anonymous or guest)
* Syncing progress
* Fetching species data

> Offline mode is not a priority for MVP.

---

## 7. Local Persistence Strategy

Minimal local storage:

* Player ID
* Cached species list
* Cached cards
* Cached encyclopedia progress

**Storage option for MVP:** MMKV

---

## 8. Database Model (High-Level)

### Tables (PostgreSQL)

#### players

* id (uuid)
* name
* avatar_config (json)
* created_at

#### species

* id (uuid)
* name
* period
* diet
* biome
* danger_level
* rarity
* description
* image_url
* sound_url

#### cards

* id (uuid)
* species_id (fk)
* scientific_data (json)
* created_at

#### player_cards

* id (uuid)
* player_id (fk)
* card_id (fk)
* discovered_at

#### biomes

* id (uuid)
* name
* description
* climate

---

## 9. API Overview (High-Level)

**Base URL:** `/api/v1`

### Player

* `POST /players` — create player
* `GET /players/{id}` — get player profile

### Species

* `GET /species` — list species
* `GET /species/{id}` — species details

### Cards

* `POST /players/{id}/cards/{speciesId}` — register discovered species
* `GET /players/{id}/cards` — list player cards

### Biomes

* `GET /biomes` — list biomes
* `GET /biomes/{id}` — biome details

---

## 10. Running the Project Locally

### Mobile

```bash
npm install
npx pod-install
npm run android
npm run ios
```

### Backend

```bash
npm install
npx prisma migrate dev
npm run dev
```

---

## 11. Future Evolution

* Multiple biomes
* Dynamic weather events
* Advanced Enchantment system
* Base building (camp, lab, care area)
* Offline-first mode
* Filhotes e cuidados
* Narrative quests
* Cosmetics and monetization
* Multiplayer expeditions

```
```
