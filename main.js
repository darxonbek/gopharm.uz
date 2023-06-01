fetch('https://reqres.in/api/users?page=2 ')
      .then(response => response.json())
      .then(json => {
           var img1 = document.getElementById('img1');
           var h1 = document.getElementById('h1');
           var p1 = document.getElementById('p1');
           var a1 = document.getElementById('a1');
           var h2 = document.getElementById('h2');
           var p2 = document.getElementById('p2');
           var a2 = document.getElementById('a2');
           var h3 = document.getElementById('h3');
           var p3 = document.getElementById('p3');
           var a3 = document.getElementById('a3');
           var h4 = document.getElementById('h4');
           var p4 = document.getElementById('p4');
           var a4 = document.getElementById('a4');
           var hh1 = document.getElementById('hh1');
           var hh4 = document.getElementById('hh4');
           var pp4 = document.getElementById('pp4');
           var aa4 = document.getElementById('aa4');
           var hh4 = document.getElementById('hh4');
           var pp4 = document.getElementById('pp4');
           var aa4 = document.getElementById('aa4');
           var hh4 = document.getElementById('hh4');
           var pp4 = document.getElementById('pp4');
           var aa4 = document.getElementById('aa4');
           var hh5 = document.getElementById('hh5');
           var pp5 = document.getElementById('pp5');
           var aa5 = document.getElementById('aa5');
           var imgg1 = document.getElementById('imgg1');
           var imgg5 = document.getElementById('imgg5');
           var imgg2 = document.getElementById('imgg2')
           var imgg3 = document.getElementById('imgg3')
           var imgg4 = document.getElementById('imgg4')
           var img2 = document.getElementById('img2');
           var img3 = document.getElementById('img3');
           var img4 = document.getElementById('img4');
           
           aa1.innerText = json.data[4].last_name;
           hh1.innerText = json.data[4].email;
           pp1.innerText = json.data[4].first_name;
           aa2.innerText = json.data[5].last_name;
           hh2.innerText = json.data[5].email;
           pp2.innerText = json.data[5].first_name;
           aa3.innerText = json.data[5].last_name;
           hh3.innerText = json.data[5].email;
           pp3.innerText = json.data[5].first_name;
           aa4.innerText = json.data[5].last_name;
           hh4.innerText = json.data[5].email;
           pp4.innerText = json.data[5].first_name;
           a1.innerText = json.data[0].last_name;
           h1.innerText = json.data[0].email;
           p1.innerText = json.data[0].first_name;
           a2.innerText = json.data[1].last_name;
           h2.innerText = json.data[1].email;
           p2.innerText = json.data[1].first_name;
           a3.innerText = json.data[2].last_name;
           h3.innerText = json.data[2].email;
           p3.innerText = json.data[2].first_name;
           a4.innerText = json.data[3].last_name;
           h4.innerText = json.data[3].email;
           p4.innerText = json.data[3].first_name;
           aa5.innerText = json.data[5].last_name;
           hh5.innerText = json.data[5].email;
           pp5.innerText = json.data[5].first_name;
           var url = json.data[2].avatar;
           
           
           
           img1.setAttribute("src", url);
           img2.setAttribute("src", url);
           img3.setAttribute("src", url);
           img4.setAttribute("src", url);
           imgg1.setAttribute("src", url);
           imgg2.setAttribute("src", url)
           imgg3.setAttribute("src", url)
           imgg4.setAttribute("src", url)
           imgg5.setAttribute("src", url)
           

      })