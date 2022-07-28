var domain = "https://kimovies.live";

var email_authenticate = sessionStorage.getItem("email");

window.addEventListener("load", async (e) => {
  await getUser();
});
async function getUser() {
  var reposne = await fetch(`${domain}/api/user?email=${email_authenticate}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  var repose = await reposne.json();

  console.log(repose);

  document.querySelector("#name_user").placeholder = repose.fullName;
  document.querySelector("#email_user").placeholder = repose.email;
  document.querySelector("#phone_user").placeholder = repose.phone;
  document.querySelector("#location_user").placeholder = repose.address;
  document.querySelector("#user_avatar").src = repose.avatar;
  document.querySelector("#name_user_infor").innerHTML += repose.fullName;
  document.querySelector("#description_user_input").value = repose.des;

  if (repose.des === null) {
    document.querySelector("#description_user").textContent =
      "Người dùng chưa cập nhật tiểu sử";
  } else {
    document.getElementById('description_user').innerText = repose.des;
  }
}
async function updateProfile() {
  var payload = JSON.stringify({
    fullName: document.querySelector("#name_user").value,
    phone: document.querySelector("#phone_user").value,
    location: document.querySelector("#location_user").value,
    description: document.querySelector("#description_user_input").value,
  });
  var reposne = await fetch(
    `${domain}/api/update-profile?email=${email_authenticate}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: payload,
    }
  );

  if (reposne.status === 200) {
    Toastify({
      text: "Thay đổi người dùng thành công",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        borderLeft: "4px solid #1CCE65",
        boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
        borderRadius: "6px",
        color: "#1E232A",
        fontWeight: "500",
        background: "#fff"
      },
    }).showToast();
  }
}

var uploadImage = document.querySelector("#changeImage");

uploadImage.addEventListener("click", () => {
  var input = document.createElement("input");
  input.type = "file";
  input.onchange = async (_this) => {
    var files = Array.from(input.files);
    if (files && files[0]) {
      var imageUser = document.querySelector("#user_avatar");
      imageUser.onload = () => {
        URL.revokeObjectURL(imageUser.src);
      };
      imageUser.src = URL.createObjectURL(files[0]);
    }
    var formData = new FormData();
    formData.append("file", files[0]);

    var response = await fetch(
      `${domain}/api/image/upload_file?email=${email_authenticate}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.status === 200) {
      Toastify({
        text: "Thay đổi avatar thành công",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
          borderLeft: "4px solid #1CCE65",
          boxShadow: "0 5px 8px rgb(0 0 0 / 8%)",
          borderRadius: "6px",
          color: "#1E232A",
          fontWeight: "500",
          background: "#fff"
        },
      }).showToast();
    }
  };

  input.click();
});

function getReverseGeocodingData(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  // This is making the Geocode request
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ latLng: latlng }, (results, status) => {
    if (status !== google.maps.GeocoderStatus.OK) {
      alert(status);
    }
    // This is checking to see if the Geoeode Status is OK before proceeding
    if (status == google.maps.GeocoderStatus.OK) {
      var address = results[0].formatted_address;
      document.querySelector("#location_user").value = address;
    }
  });
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  getReverseGeocodingData(position.coords.latitude, position.coords.longitude);
}
