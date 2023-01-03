---
creation date: 2022-03-13 23:22
modified date: 2022-12-30 12:14:51
cssclass: dashboard
banner: "https://images.unsplash.com/photo-1600181982553-ce7d36051c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
banner_y: 0.296
---
# Apollo
---
## Primary Categories
```dataview
LIST FROM #💚
```
## Vault
- 📁 **Recent File Updates**
	```dataview
	LIST FROM "" SORT file.mtime DESC LIMIT 5
	```
- 📁 **Newest Files**
	```dataview
	LIST FROM "" SORT file.cday DESC LIMIT 5
	```
- 📈 **Stats**
	- Total Files: `$=dv.pages().length`
- ☢️ **Quick Notes**
	```dataview
	LIST FROM #☢️ 
	```

