# URL Shortener - Feature List

## Core Features (MVP)

1. **Create Short URL**
   - Input: long URL → Output: short code (e.g., `abc123`)
   - Auto-generate unique short codes
   - Validate URL format

2. **Redirect**
   - `GET /:code` → 302 redirect to original URL
   - Handle invalid codes (404)

3. **Basic Analytics**
   - Total click count per short URL
   - Simple dashboard showing: original URL, short code, creation date, total clicks

## Nice-to-Have Features

4. **Link Management**
   - View all created short URLs
   - Delete short URLs
   - Edit destination URL

5. **Click Analytics**
   - Click history with timestamps
   - Daily/weekly click charts
   - Recent clicks list

6. **Custom Short Codes**
   - Allow custom slugs (`/my-project` instead of random code)
   - Validate uniqueness

## Anti-Features (Explicitly NOT Building)

- User accounts/auth
- Advanced geo/device analytics
- API rate limiting
- Expiring links
- QR codes
- Bulk imports
- Link scheduling

## Database Schema

```sql
CREATE TABLE links (
    id INT AUTO_INCREMENT PRIMARY KEY,
    short_code VARCHAR(10) UNIQUE NOT NULL,
    original_url TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clicks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    link_id INT,
    clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (link_id) REFERENCES links(id) ON DELETE CASCADE
);
```

## API Endpoints

```
GET  /:code                    # Redirect
POST /api/links               # Create short URL
GET  /api/links               # List all links
GET  /api/links/:id           # Get link details + stats
PUT  /api/links/:id           # Update destination URL
DELETE /api/links/:id         # Delete link
```
