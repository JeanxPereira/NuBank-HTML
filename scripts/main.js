var isHidden = false

function toggleEye() {
  var eyeIcon = document.querySelector(".eye-on")
  var balanceOriginal = document.getElementById("balance")
  var balanceCircles = document.getElementById("balance-hide")

  if (isHidden) {
    eyeIcon.innerHTML = "\ue840"
    balanceOriginal.style.display = "block"
    balanceCircles.style.display = "none"
  } else {
    eyeIcon.innerHTML = "\ue83f"
    balanceOriginal.style.display = "none"
    balanceCircles.style.display = "block"
  }

  isHidden = !isHidden
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = new KeenSlider(".keen-slider", {
    loop: false,
    mode: "free",
    slides: {
      perView: 4.5,
      spacing: 14,
    },
  })

  const cardSlider = new KeenSlider("#cardSliderRef", {
    loop: false,
    mode: "free",
    slides: {
      perView: 1.5,
      spacing: 14,
    },
  })

  const discoverCardSlider = new KeenSlider("#discoverCardSliderRef", {
    loop: false,
    mode: "free",
    slides: {
      perView: 2,
      spacing: 14,
    },
  })
})

function settings() {
  window.location.href = "pages/settings.html"
}
function settingsPage() {
  window.location.href = "settings.html"
}

function home() {
  window.location.href = "../index.html"
}

function pixArea() {
  window.location.href = "pages/pix-area.html"
}

function advancedSettings() {
  window.location.href = "advanced-settings.html"
}

function configProfile() {
  window.location.href = "config-profile.html"
}
