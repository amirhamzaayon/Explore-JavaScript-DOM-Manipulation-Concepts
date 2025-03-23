// // // Function to handle the donation process
// document.addEventListener("DOMContentLoaded", function () {
//   // Grab the user's total money element in the nav
//   const totalMoneyElement = document
//     .getElementsByClassName("total-amount")[0]
//     .getElementsByTagName("p")[1];
//   let totalMoney =
//     parseInt(totalMoneyElement.innerText.replace(" BDT", "")) || 0;

//   // Grab all the donation cards
//   const donationCards = document.getElementsByClassName("donate-card");

//   // Loop through each donation card using a for...of loop
//   for (const card of donationCards) {
//     const totalDonationElement = card
//       .getElementsByClassName("total-donation")[0]
//       .getElementsByTagName("p")[0]; // Total donation element in the card
//     const donateButton = card.getElementsByTagName("button")[0]; // Donate Now button in this card
//     const donationInput = card.querySelector('input[type="number"]'); // Donation input field in this card

//     // Parse the initial total donation amount from the element
//     let totalDonation =
//       parseInt(totalDonationElement.innerText.replace(" BDT", "")) || 0;

//     // Add event listener for the Donate Now button for each card
//     donateButton.addEventListener("click", function () {
//       // Get the donation amount entered by the user
//       const donationAmount = parseInt(donationInput.value);

//       // Validate donation amount
//       if (isNaN(donationAmount) || donationAmount <= 0) {
//         alert("Please enter a valid donation amount.");
//         return;
//       } else if (donationAmount > totalMoney) {
//         alert("You don't have enough money to make this donation.");
//         return;
//       }

//       // Update the total donation and user's total money
//       totalDonation += donationAmount;
//       totalMoney -= donationAmount;

//       // Reflect the updated amounts in the UI
//       totalDonationElement.innerText = `${totalDonation} BDT`;
//       totalMoneyElement.innerText = `${totalMoney} BDT`;

//       // Clear the input field after the donation is processed
//       donationInput.value = "";
//     });
//   }
// });

// // Function to handle the donation process
document.addEventListener("DOMContentLoaded", function () {
  // Grab the user's total money element in the nav
  const totalMoneyElement = document
    .getElementsByClassName("total-amount")[0]
    .getElementsByTagName("p")[1];
  let totalMoney =
    parseInt(totalMoneyElement.innerText.replace(" BDT", "")) || 0;

  // Grab all the donation cards
  const donationCards = document.getElementsByClassName("donate-card");

  // Loop through each donation card using a for...of loop
  for (const card of donationCards) {
    const totalDonationElement = card
      .getElementsByClassName("total-donation")[0]
      .getElementsByTagName("p")[0]; // Total donation element in the card
    const donateButton = card.getElementsByTagName("button")[0]; // Donate Now button in this card
    const donationInput = card.querySelector('input[type="number"]'); // Donation input field in this card

    // Parse the initial total donation amount from the element
    let totalDonation =
      parseInt(totalDonationElement.innerText.replace(" BDT", "")) || 0;

    // Add event listener for the Donate Now button for each card
    donateButton.addEventListener("click", function () {
      // Get the donation amount entered by the user
      const donationAmount = parseInt(donationInput.value);

      // Validate donation amount
      if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
      } else if (donationAmount > totalMoney) {
        alert("You don't have enough money to make this donation.");
        return;
      }

      // Update the total donation and user's total money
      totalDonation += donationAmount;
      totalMoney -= donationAmount;

      // Reflect the updated amounts in the UI
      totalDonationElement.innerText = `${totalDonation} BDT`;
      totalMoneyElement.innerText = `${totalMoney} BDT`;

      // Create a new history card
      addHistoryCard(donationAmount, card.querySelector("h1").innerText);

      // Clear the input field after the donation is processed
      donationInput.value = "";
    });
  }

  function addHistoryCard(donationAmount, cause) {
    const historyContainer = document.querySelector(".history-card");

    // Create a new history card element
    const historyCard = document.createElement("div");
    historyCard.className =
      "history-card w-[1076px] flex flex-col gap-8 p-8 border-2 rounded-lg border-[#171717]/[.1]";

    // Get the current date and time
    const currentDate = new Date().toLocaleString();

    // Populate the history card with content
    historyCard.innerHTML = `
        <h1 class="text-[20px] font-semibold text-[#111]">
            ${donationAmount} BDT is Donated for ${cause}
        </h1>
        <p class="text-[16px] font-light text-[#171717]/[.7]">
            Date: ${currentDate}
        </p>
    `;

    // Append the new history card to the history section
    historyContainer.appendChild(historyCard);
  }

  // Tab functionality
  const donationButton = document.getElementById("donationButton");
  const historyButton = document.getElementById("historyButton");
  const donationCardsContainer = document.getElementById("donationCards");
  const historyCardsContainer = document.getElementById("historyCards");

  donationButton.addEventListener("click", function () {
    donationCardsContainer.classList.remove("hidden");
    historyCardsContainer.classList.add("hidden");
    donationButton.classList.add("bg-[#B4F461]");
    donationButton.classList.remove("bg-white");
    historyButton.classList.add("bg-white");
    historyButton.classList.remove("bg-[#B4F461]");
  });

  historyButton.addEventListener("click", function () {
    donationCardsContainer.classList.add("hidden");
    historyCardsContainer.classList.remove("hidden");
    historyButton.classList.add("bg-[#B4F461]");
    historyButton.classList.remove("bg-white");
    donationButton.classList.add("bg-white");
    donationButton.classList.remove("bg-[#B4F461]");
  });
});
