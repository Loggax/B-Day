function randomInteger(min, max) {
    return Math.trunc(min + Math.random() * (max-min));
}

function fuck() {
    let b = randomInteger(1, 30);
    console.log(b);

    let arr =["Знай - ти чудова!", "Не думай - дій!", "Завтра буде краще, ніж сьогодні!", "Знайте, Захарко про вас пам'ятає!", "Ти зможеш, я вірю в тебе!",
            "Повірте, що можете, і ви на пів дороги.", "Єдине, про що жалію, чому не здружився з вами так сильно набагато швидше!", "Світіться від щастя так сильно, лампа коли дають світло.",
            "Сьогодні ідеальний день щоб ризикнути та втілити свої мрії!", "Усміхнись, адже твоя усмішка чудова!"];
    alert(arr[b]);
}