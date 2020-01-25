export const mobileProjects = [
  {
    title: "Project 1",
    images: [
      "calculate2.jpg",
      "calculate3.jpg",
      "calculate1.jpg",
      "calculate4.jpg"
    ],
    description: `I made this app to help calculate my commission at work. Users can
        sign up and create an account or log in with an existing one. User
        authentication is being handled through firebase. You store your work
        load and the app will calculate your commissions for that day. Your
        data is also displayed in graph form with a library called chartjs.`,
    barTitle: "USE EXPO AND SCAN BARCODE",
    barcodeImg: "calc-scan.png"
  },
  {
    title: "Project 2",
    images: ["movie3.jpg", "movie2.jpg", "movie1.jpg"],
    description: ` With this app I'm getting the data from a movie api. I fetch the data
        and display it within the app using flatlist horizontal. You can
        select any movie and get present with more detail about the movie and
        watch the trailer. I also added search functionality as well.`,
    barTitle: "USE EXPO AND SCAN BARCODE",
    barcodeImg: "movie-scan.png"
  }
];

export const webProjects = [
  {
    title: "Project 3",
    images: ["survey1 (2).png", "survey2 (2).png", "survey3 (2).png"],
    description: `This React site is a simple survey. The answers are being stored in
        firebase and retrieved to be displayed in graphs. The site is also
        mobile friendly so you can take the survey via mobile.`,
    siteLink: "https://stoic-panini-dd5afc.netlify.com"
  },
  {
    title: "Project 4",
    images: ["birth4.png", "birth3.png", "birth1.png", "birth2.png"],
    description: `This project takes your date of birth and shows movies that were either released during your birthday,
    the month of your birth, and movies released that year. The backend is a Java Springboot rest api thats fetching data 
    from a movie database and responding with movie titles based on the users birthday. The frontend I built using
    React and Material UI components.`,
    siteLink: "https://blissful-beaver-33cf0d.netlify.com/"
  }
];

export const socialLinks = {
  links: [
    "https://www.linkedin.com/in/michael-moore-developer/",
    "https://github.com/24HourDeveloper",
    "https://twitter.com/UNCODED_LS"
  ],
  social: ["Linked-In", "Github", "Twitter"]
};
