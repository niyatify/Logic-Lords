const creators=[
{name:"Neha Sharma",role:"Short-form Video Creator",cat:"Video",rating:"4.9",price:"₹999",initials:"NS",tags:["Reels","UGC","AI Video"],match:98},
{name:"Arjun Kapoor",role:"Brand & Motion Designer",cat:"Design",rating:"4.8",price:"₹1,499",initials:"AK",tags:["Branding","3D","Motion"],match:95},
{name:"Maya Rao",role:"AI Content Strategist",cat:"Writing",rating:"5.0",price:"₹799",initials:"MR",tags:["Scripts","SEO","Strategy"],match:94},
{name:"Rohan Mehta",role:"YouTube & Podcast Editor",cat:"Video",rating:"4.9",price:"₹1,999",initials:"RM",tags:["YouTube","Editing","Podcast"],match:91},
{name:"Sara Khan",role:"AI Music & Sound Creator",cat:"Music",rating:"4.8",price:"₹1,299",initials:"SK",tags:["Music","Sound FX","Jingles"],match:89},
{name:"Dev Malhotra",role:"AI Ad Creative Specialist",cat:"Design",rating:"4.9",price:"₹1,799",initials:"DM",tags:["Ads","Creatives","Meta"],match:93}
];

function renderCreators(list=creators){
 const grid=document.getElementById("creatorGrid");
 grid.innerHTML=list.map(c=>`<article class="creator-card">
  <div class="creator-card-top"><div class="creator-info"><div class="creator-avatar">${c.initials}</div><div><h3>${c.name}</h3><p>${c.role}</p></div></div><div class="rating">★ ${c.rating}</div></div>
  <div class="card-tags">${c.tags.map(t=>`<span>${t}</span>`).join("")}</div>
  <div class="card-bottom"><div class="price">Starting <b>${c.price}</b></div><button class="secondary-btn" onclick="hire('${c.name}')">View profile</button></div>
 </article>`).join("");
}
function filterCreators(){
 const q=document.getElementById("searchInput").value.toLowerCase();
 const cat=document.getElementById("categoryFilter").value;
 renderCreators(creators.filter(c=>(cat==="all"||c.cat===cat)&&(c.name.toLowerCase().includes(q)||c.role.toLowerCase().includes(q)||c.tags.join(" ").toLowerCase().includes(q))));
}
function showAll(){document.getElementById("searchInput").value="";document.getElementById("categoryFilter").value="all";renderCreators();document.getElementById("marketplace").scrollIntoView({behavior:"smooth"});}
function smartMatch(){
 const q=document.getElementById("searchInput").value;
 const best=[...creators].sort((a,b)=>b.match-a.match).slice(0,3);
 renderCreators(best);
 toast(q?`AI found ${best.length} strong matches for "${q}"`:"AI found your top creator matches ✦");
}
function generateAI(){
 const prompt=document.getElementById("aiPrompt").value.trim();
 if(!prompt){toast("First describe your content idea");return}
 const result=document.getElementById("aiResult");
 result.classList.remove("hidden");
 result.innerHTML=`<strong>✦ AI Creative Brief</strong><br><br><b>Goal:</b> Turn your idea into a high-engagement content campaign.<br><b>Recommended format:</b> Short-form video + 3 supporting posts<br><b>Creator profile:</b> Video Creator / Content Strategist<br><b>Hook:</b> Lead with a strong problem or curiosity gap in the first 2 seconds.<br><b>Next step:</b> We found <strong>3 creators</strong> who match this brief.`;
}
function hire(name){toast(`${name}'s profile selected — demo request ready`);}
function openModal(id){document.getElementById(id).classList.remove("hidden")}
function closeModal(id){document.getElementById(id).classList.add("hidden")}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
document.querySelectorAll(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.add("hidden")}));
renderCreators();
