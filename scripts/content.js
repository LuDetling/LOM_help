const body = document.querySelector("body");
const GameDiv = document.querySelector("#GameDiv");
const contentExtensionDiv = document.createElement("div");
contentExtensionDiv.setAttribute("id", "contentExtension");
const contentPersosDiv = document.createElement("div");
contentPersosDiv.setAttribute("id", "contentPersos");

body.appendChild(contentExtensionDiv);

if (GameDiv) {
  function myMush() {
    const me = document.createElement("img");
    me.src = chrome.runtime.getURL("images/my_mush.png");
    me.setAttribute("id", "lucas_detling");
    body.appendChild(me);
  }

  function createExtension(persos) {
    const nav = document.createElement("nav");
    contentExtensionDiv.appendChild(nav);
    contentExtensionDiv.appendChild(contentPersosDiv);

    for (let i = 0; i < persos.length; i++) {
      // NAVIGATION
      const perso = document.createElement("button");
      perso.setAttribute("id", "perso" + i);
      const img = document.createElement("img");

      if (i == 0 && !localStorage.getItem("mushrooms")) {
        perso.classList.add("active");
      }

      nav.appendChild(perso);
      perso.appendChild(img);

      perso.style.backgroundImage =
        "url(" + chrome.runtime.getURL(persos[i].image) + ")";
      perso.addEventListener("click", function () {
        if (document.querySelector(".active")) {
          document.querySelector(".active").classList.remove("active");
          document
            .querySelector(".perso-active")
            .classList.remove("perso-active");
        }
        this.classList.add("active");
        document.querySelectorAll(".persos")[i].classList.add("perso-active");
      });

      const contentPersoDiv = document.createElement("div");
      contentPersoDiv.setAttribute("class", "persos perso-" + i);
      contentPersosDiv.appendChild(contentPersoDiv);
      if (i == 0 && !localStorage.getItem("mushrooms")) {
        contentPersoDiv.classList.add("perso-active");
      }
      createDescriptionPerso(i, contentPersoDiv);

      const contentTierListDiv = document.createElement("div");
      contentTierListDiv.setAttribute("class", "contentTierList");
      const contentSkillTierListDiv = document.createElement("div");
      contentSkillTierListDiv.setAttribute("class", "contentSkillTierList");
      contentPersoDiv.appendChild(contentTierListDiv);
      contentTierListDiv.appendChild(contentSkillTierListDiv);
      const contentPalTierListDiv = document.createElement("div");
      contentPalTierListDiv.setAttribute("class", "contentPalTierList");
      contentTierListDiv.appendChild(contentPalTierListDiv);

      //TIER LIST SKILLS
      createSkillsTierList(i, contentSkillTierListDiv);
      createPalsTierList(i, contentPalTierListDiv);
    }
  }

  function createPalsTierList(index, contentPalTierListDiv) {
    const title = document.createElement("h2");
    title.textContent = "Acolytes";
    contentPalTierListDiv.appendChild(title);
    const palTierList = document.createElement("div");
    palTierList.setAttribute("class", "tierList palTierList-" + index);
    contentPalTierListDiv.appendChild(palTierList);

    for (let i = 0; i < 6; i++) {
      const contentNoteDiv = document.createElement("div");
      const noteDiv = document.createElement("div");
      const contentImg = document.createElement("div");
      contentImg.setAttribute("class", "content-img-tierList");

      contentNoteDiv.setAttribute("class", "content-tierList");
      noteDiv.setAttribute("class", "note note-" + notes[i]);
      noteDiv.textContent = notes[i];
      palTierList.appendChild(contentNoteDiv);
      contentNoteDiv.appendChild(noteDiv);
      contentNoteDiv.appendChild(contentImg);

      createPalImg(index, i, contentImg);
    }
  }

  function createPalImg(index, i, contentImg) {
    if (persos[index].pals) {
      for (let j = 0; j < persos[index].pals[i].length; j++) {
        const imgPal = document.createElement("img");
        imgPal.src = chrome.runtime.getURL(persos[index].pals[i][j].image);
        contentImg.appendChild(imgPal);
      }
    }
  }

  function createSkillsTierList(index, contentSkillTierListDiv) {
    const title = document.createElement("h2");
    title.textContent = "Compétences";
    contentSkillTierListDiv.appendChild(title);
    const skillTierList = document.createElement("div");
    skillTierList.setAttribute("class", "tierList skillTierList-" + index);
    contentSkillTierListDiv.appendChild(skillTierList);

    for (let i = 0; i < 7; i++) {
      const contentNoteDiv = document.createElement("div");
      const noteDiv = document.createElement("div");
      const contentImg = document.createElement("div");
      contentImg.setAttribute("class", "content-img-tierList");

      contentNoteDiv.setAttribute("class", "content-tierList");
      noteDiv.setAttribute("class", "note note-" + notes[i]);
      noteDiv.textContent = notes[i];
      skillTierList.appendChild(contentNoteDiv);
      contentNoteDiv.appendChild(noteDiv);
      contentNoteDiv.appendChild(contentImg);

      createSkillImg(index, i, contentImg);
    }
  }

  function createSkillImg(index, i, contentImg) {
    if (persos[index].skills) {
      for (let j = 0; j < persos[index].skills[i].length; j++) {
        const imgSkill = document.createElement("img");
        imgSkill.src = chrome.runtime.getURL(persos[index].skills[i][j].image);
        contentImg.appendChild(imgSkill);
      }
    }
  }

  function createDescriptionPerso(index, contentPersoDiv) {
    const title = document.createElement("h1");
    title.textContent = persos[index].name;
    contentPersoDiv.appendChild(title);
    const statsDiv = document.createElement("div");
    statsDiv.setAttribute("class", "stats");
    statsDiv.textContent = persos[index].stats;
    contentPersoDiv.appendChild(statsDiv);
  }

  createExtension(persos);

  myMush();
}
