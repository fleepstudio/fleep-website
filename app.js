const publications=[
 {title:"The Other Side",creator:"FLEEP Originals",category:"Short Stories",pages:24,color:"#60436e",tag:"Editor's choice",desc:"A story about choices, courage and new beginnings."},
 {title:"Beyond the Frame",creator:"Creative Minds",category:"Magazines",pages:32,color:"#a94e67",tag:"Trending",desc:"Ideas, culture and creative perspectives."},
 {title:"The Last Hero",creator:"Indie Comics",category:"Comics",pages:18,color:"#c47745",tag:"New release",desc:"An illustrated adventure from an independent creator."},
 {title:"Little Big Ideas",creator:"Young Readers",category:"Children",pages:16,color:"#537d78",tag:"Family reading",desc:"Curious ideas for growing minds."},
 {title:"The Art of Tomorrow",creator:"Studio North",category:"Magazines",pages:40,color:"#405d83",tag:"Editor's choice",desc:"Design, technology and tomorrow's possibilities."},
 {title:"Midnight Letters",creator:"Story House",category:"Short Stories",pages:28,color:"#82535c",tag:"Popular",desc:"A collection of letters and untold stories."}
];
const samplePages=[
 ["THE OTHER SIDE","Every story has a beginning. Sometimes the road we fear is the one that leads us somewhere extraordinary."],
 ["A NEW BEGINNING","Daniel looked beyond the familiar streets. For the first time, he wondered what would happen if he stopped being afraid."],
 ["THE JOURNEY","Each step brought a new question, a new possibility and a reason to keep moving forward."],
 ["TO BE CONTINUED","The next chapter is waiting to be written. Every reader has a world of possibilities ahead."]
];
let activeCategory="All",currentBook=publications[0],currentPage=1,saved=new Set();
const $=id=>document.getElementById(id);
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active-view",v.id===name));document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===name));$("menuBtn").textContent="☰";document.querySelector("nav").classList.remove("open");window.scrollTo({top:0,behavior:"smooth"});}
function renderBooks(){const q=$("searchInput").value.toLowerCase();const list=publications.filter(p=>(activeCategory==="All"||p.category===activeCategory)&&`${p.title} ${p.creator} ${p.category}`.toLowerCase().includes(q));$("resultCount").textContent=`${list.length} sample title${list.length===1?"":"s"}`;$("bookGrid").innerHTML=list.map((p,i)=>`<article class="book-card"><div class="cover" data-open="${p.title}" style="background:linear-gradient(145deg,${p.color},#241b2b)"><small>FLEEP PUBLICATIONS</small><strong>${p.title}</strong><small>${p.category.toUpperCase()}</small></div><h3>${p.title}</h3><p>${p.category} · ${p.pages} pages<br>${p.creator}</p><div class="card-actions"><button class="btn primary small" data-open="${p.title}">Read</button><button class="btn outline small" data-save="${p.title}">${saved.has(p.title)?"♥ Saved":"♡ Save"}</button></div></article>`).join("")||'<p class="muted">No matching publications. Try another search.</p>';}
function openBook(title){currentBook=publications.find(p=>p.title===title)||publications[0];currentPage=1;$("readerTitle").textContent=currentBook.title;$("readerMeta").textContent=`${currentBook.creator} · ${currentBook.category} · Sample publication`;$("pdfFrame").hidden=true;updateReader();showView("reader");}
function updateReader(){const p=samplePages[currentPage-1];$("sampleHeading").textContent=currentPage===1?currentBook.title.toUpperCase():p[0];$("sampleText").textContent=p[1];$("pageLabel").textContent=`Page ${currentPage} of ${samplePages.length}`;$("progressBar").style.width=`${currentPage/samplePages.length*100}%`;$("progressText").textContent=`${Math.round(currentPage/samplePages.length*100)}% through this sample`;$("prevPage").disabled=currentPage===1;$("nextPage").disabled=currentPage===samplePages.length;$("saveBtn").textContent=saved.has(currentBook.title)?"♥ Saved":"♡ Save";}
document.addEventListener("click",e=>{const view=e.target.closest("[data-view]");if(view)showView(view.dataset.view);const go=e.target.closest("[data-go]");if(go)showView(go.dataset.go);const open=e.target.closest("[data-open]");if(open)openBook(open.dataset.open);const save=e.target.closest("[data-save]");if(save){const t=save.dataset.save;saved.has(t)?saved.delete(t):saved.add(t);renderBooks();}});
$("categoryChips").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;activeCategory=b.dataset.category;document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("selected",x===b));renderBooks();});
$("searchInput").addEventListener("input",renderBooks);
$("prevPage").addEventListener("click",()=>{if(currentPage>1){currentPage--;updateReader();}});
$("nextPage").addEventListener("click",()=>{if(currentPage<samplePages.length){currentPage++;updateReader();}});
$("saveBtn").addEventListener("click",()=>{saved.has(currentBook.title)?saved.delete(currentBook.title):saved.add(currentBook.title);updateReader();});
$("goReader").addEventListener("click",()=>showView("reader"));
$("menuBtn").addEventListener("click",()=>document.querySelector("nav").classList.toggle("open"));
$("pdfInput").addEventListener("change",e=>{const file=e.target.files[0];if(!file)return;if(file.type!=="application/pdf"){alert("Please choose a PDF file.");e.target.value="";return;}const url=URL.createObjectURL(file);$("pdfFrame").src=url;$("pdfFrame").hidden=false;$("fileName").textContent=`Selected: ${file.name} · ${Math.round(file.size/1024)} KB. This file stays in your browser.`;});
$("year").textContent=new Date().getFullYear();
renderBooks();updateReader();
