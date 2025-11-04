# 🎪 Event Quick Reference Card

## Interactive City Books - Touch Screen Display Guide

### 🖥️ Display Setup

**URL**: http://localhost:3000/ (or your deployed URL)

**Recommended Settings**:
- Full screen mode (F11)
- Brightness: 80-100%
- Orientation: Landscape
- Auto-sleep: Disabled
- Screensaver: Disabled

---

## 👆 Touch Interactions

### Homepage (Bookshelf)
```
┌─────────────────────────────────┐
│   TOUCH ANY BOOK TO OPEN IT    │
├─────────────────────────────────┤
│  📕 Kolkata  📗 Varanasi       │
│  📘 Jaipur   📙 Mumbai         │
└─────────────────────────────────┘
```

### Inside a Book
```
┌────────┬────────┬────────┐
│   ◄    │  BOOK  │   ►    │
│  PREV  │  PAGE  │  NEXT  │
│        │        │        │
│    BACK TO HOME ⬇️        │
└────────┴────────┴────────┘
```

**Page Navigation**:
- **Swipe Left** → Next Page
- **Swipe Right** → Previous Page
- **Tap Left Arrow** → Previous Page
- **Tap Right Arrow** → Next Page

**Exit Book**:
- Tap "Back to Home" button at bottom center

---

## ⌨️ Keyboard Controls (for testing)

| Key | Action |
|-----|--------|
| `→` | Next Page |
| `←` | Previous Page |
| Click book | Open book |
| Click back button | Return home |

---

## 🎬 Auto-Demo Mode

**The app automatically starts a demo if untouched for 30 seconds**

- Pages flip automatically every 3 seconds
- Cycles through all pages
- Returns to start
- Stops when user touches screen

**Perfect for attracting visitors!**

---

## 📚 Available Books

| Book | Pages | Theme Color |
|------|-------|-------------|
| **Kolkata** | 5 | Purple/Violet |
| **Varanasi** | 5 | Pink/Red |
| **Jaipur** | 5 | Pink/Yellow |
| **Mumbai** | 5 | Blue/Cyan |

**Total**: 20 pages of rich cultural content

---

## 🔧 Troubleshooting at Event

### Video Not Playing?
✅ Touch screen anywhere to start
✅ Check browser autoplay settings
✅ Reload page (F5)

### Touch Not Responding?
✅ Calibrate touch screen
✅ Restart browser
✅ Check touch drivers

### App Frozen?
✅ Refresh page (F5)
✅ Clear browser cache
✅ Restart browser

### Book Won't Open?
✅ Touch book directly (not shelf)
✅ Wait for animation to complete
✅ Check console for errors

---

## 🚀 Starting the App

### On Event Day:

1. **Open PowerShell**
2. **Navigate to project**:
   ```powershell
   cd d:\interactivebook\frontend
   ```
3. **Start server**:
   ```powershell
   npm run dev
   ```
4. **Open browser** to http://localhost:3000/
5. **Press F11** for fullscreen
6. **Test touch** by opening a book

### Keep Running:
- Do NOT close PowerShell window
- Keep laptop plugged in
- Disable sleep mode
- Disable screensaver

---

## 📊 Visitor Engagement Tips

### Attract Attention:
✅ Let auto-demo run every few minutes
✅ Position screen at eye level
✅ Add signage: "Touch to Explore"
✅ Demonstrate to first few visitors

### Maintain Flow:
✅ Keep homepage clean (auto-resets)
✅ If stuck in a book, tap "Back to Home"
✅ Monitor for any technical issues
✅ Have backup device ready

### Peak Performance:
- Reset daily: Refresh browser once per day
- Clear cache: Once per event
- Monitor resource usage
- Keep laptop cool

---

## 🎯 Expected Behavior

### Normal Flow:
1. Visitor sees bookshelf → **15 sec**
2. Touches a book → **5 sec animation**
3. Reads 3-5 pages → **2-3 min**
4. Returns home → **5 sec**
5. Next visitor → **Cycle repeats**

### Auto-Demo:
1. No interaction for 30 sec
2. Book auto-flips pages
3. Visitor touches screen
4. Returns to normal mode

---

## 📞 Emergency Contacts

**Technical Issues**:
- Check PROJECT_COMPLETE.md
- Check SETUP_GUIDE.md
- Browser console (F12)

**Quick Fixes**:
```powershell
# Restart server
Ctrl+C (in PowerShell)
npm run dev

# Clear cache and restart
Ctrl+Shift+Delete (in browser)
Reload page
```

---

## 🎊 Success Checklist

Before event:
- [ ] Tested on actual touch screen
- [ ] Fullscreen mode working
- [ ] All 4 books open correctly
- [ ] All pages have content and images
- [ ] Back button works
- [ ] Auto-demo tested
- [ ] Touch calibrated
- [ ] Backup system ready
- [ ] Power supply secure
- [ ] Screensaver disabled

---

## 💡 Pro Tips

✅ **Position**: Place screen where people naturally stop
✅ **Height**: Eye level for average adult (or kids if family event)
✅ **Lighting**: Avoid direct sunlight/glare on screen
✅ **Sound**: Mute if too loud, unmute for page flip sound
✅ **Demo**: Show first visitor, others will follow
✅ **Reset**: Refresh page between sessions if needed
✅ **Monitor**: Check every hour for any issues

---

**Your Interactive City Books app is ready to impress visitors! 🌟**

Have an amazing event! 🎉
