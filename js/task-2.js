const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  const gallery = document.querySelector(".gallery");
  // console.log(gallery);
  
  // debugger;
  const imgElem = images
    .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`)
    .join("");
  
  console.log(imgElem);
  
  gallery.insertAdjacentHTML("beforeend", imgElem);