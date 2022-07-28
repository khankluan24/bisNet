var domain = "https://kimovies.live";

var searchResult = document.getElementById('list_results');
async function getsearchvalue() {
    var search = document.querySelector("#searchValue").value
    var payload = JSON.stringify({
        keyword: document.querySelector("#searchValue").value
    });

    var response = await fetch(`${domain}/api/tutorial/search`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: payload
    });
    if (response.status === 200) {
        var list = await response.json();
        document.querySelector("#value").innerHTML += `
            Đã tìm được ${list.length} giá trị từ search 
            <span class="text-navy">${search}</span>
        `;
        console.log(list);
        for (var h in list) {
            var ne = list[h];
            searchResult.innerHTML +=
                `
                <div class="hr-line-dashed"></div>
                <h3><a href="${ne.link}">${ne.title}</a></h3>
                <p>${ne.des.substring(0, 255).concat("...")}</p>
            `;
        }
    } else if (response.status === 400) {
        searchResult.innerHTML +=
            `
        <div class="search-result">
        <div class="hr-line-dashed"></div>
            <h3><a>Giá trị ${search} không có kết quả</a></h3>
            <p>Không tìm thấy giá trị</p>
        </div>
        `;
        setTimeout(() => {
            searchResult.innerHTML = '';
          }, 2000);
    }
}