"use strict";

/*
   Final Project
   Author: Ejegul Bayramova
   Date:   5/10/2024
   Filename: gulya's_membershipa.js
*/


window.addEventListener("load", function() {
  let accountForm = document.forms.accountForm;
  let membershipType = accountForm.elements.membershipType;
  let duration = accountForm.elements.duration;

  // Select Membership Type selection list when form opens
  membershipType.focus();

  for (let i = 0; i < accountForm.elements.length; i++) {
    accountForm.elements[i].addEventListener("change", calcMembershipCost);
  }

  calcMembershipCost();

  function calcMembershipCost() {
    let mIndex = membershipType.selectedIndex;
    let mValue = membershipType.options[mIndex].value;

    let dIndex = duration.selectedIndex;
    let dValue = duration.options[dIndex].value;

    let membershipCost = mValue * dValue;
    accountForm.elements.membershipCost.value = membershipCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
    
     let optionValue =
document.querySelector('input[name="option"]:checked').value;

    let optionCost = optionValue * dValue;
    accountForm.elements.optionCost.value = optionCost.toLocaleString("en-US", {style: "currency", currency: "USD"});


    let subtotal = membershipCost + optionCost;
    accountForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});


    let salesTax = subtotal * 0.05;
    accountForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

    let totalCost = subtotal + salesTax;
    accountForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

    accountForm.elements.membershipName.value = membershipType.options[mIndex].text;
    
    accountForm.elements.durationOption.value = duration.options[dIndex].text;
  }
});


