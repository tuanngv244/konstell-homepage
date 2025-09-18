# # FROM node:18-alpine AS dependencies
# FROM node:20-alpine AS dependencies
# # RUN npm install -g yarn
# WORKDIR /app
# COPY package.json ./

# # FROM node:18-alpine AS builder
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY . .

# # RUN yarn install
# RUN npm install --legacy-peer-deps
# RUN npm run build

# # FROM node:18-alpine AS runner
# FROM node:20-alpine AS runner
# WORKDIR /app
# ENV NODE_ENV production

# COPY --from=builder /app/next.config.ts ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

# EXPOSE 80
# CMD ["npm", "run", "start"]
# --------------------------------------------------------------------

# ===== 1. Install dependencies =====
FROM node:20-alpine AS deps
WORKDIR /app
# RUN npm install -g yarn
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock ./
RUN yarn install


# ===== 2. Build Next.js app =====
FROM node:20-alpine AS builder
WORKDIR /app

# Copy source and node_modules from deps
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN yarn build


# ===== 3. Prepare production image =====
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy build output and public files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
# Copy package.json for yarn start use scripts, and node_modules
COPY --from=builder /app/package.json ./
COPY --from=deps    /app/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]