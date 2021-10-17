# Next Door

![Next Door](https://res.cloudinary.com/fghurayri/image/upload/v1628986966/faisal.sh/geospatial-apps-primitives/next-door-app.jpg)

An example application built for my post - [How to Build Geospatial Apps](https://faisal.sh/posts/how-to-build-geospatial-apps). If you are interested to learn more about how I used xState in a step-by-step guide, check my other post - [Taming Complex UIs with State Machines and Pure Views](https://faisal.sh/posts/taming-complex-uis-with-state-machines-and-pure-views)

## Folder Structure

The following is an overview of my opinionated folder structure. I think it provides the best separation between frontend and backend code.

```bash
.
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
├── src
│   ├── lib
│   │   ├── api
│   │   │   ├── db.js
│   │   │   ├── models
│   │   │   └── services
│   │   ├── components
│   │   ├── contexts
│   │   ├── hooks
│   │   ├── machines
│   │   └── services
│   └── pages
│       ├── api
│       ├── _app.js
│       └── index.js
└── tailwind.config.js
```

## Tools

To build this application, I have used the following tools:

- [Next JS](https://nextjs.org/docs)
- [Mapbox GL JS](https://visgl.github.io/react-map-gl/)
- [XState](https://xstate.js.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## How To Run Locally

### Prerequisites

- Next JS and MongoDB Atlas: [This guide](https://www.mongodb.com/developer/how-to/nextjs-building-modern-applications/#setting-up-our-mongodb-database) is a good reference if you need help with setting up both Next JS and MongoDB Atlas.
- Mapbox: You will need to have an API key (free) to have the map solution working. Grab yours from [here](https://account.mapbox.com/access-tokens/)

### Steps

```bash
# git clone the repo
cd next-door
cp .env.local.example .env.local # and fill the file with your secrets
npm i && npm run dev
```
