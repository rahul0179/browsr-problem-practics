
const btn = () => {
    const res = confirm("do you want to go");
    console.log(res)
    if (res == true) {
        location.href = "https://www.w3schools.com";
    }
    else {
        alert('thank you ')
    }
}