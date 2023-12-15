const chairs = document.querySelectorAll('.row1 img');
const vip_chairs = document.querySelectorAll('.viprow img');
const seatCell = document.getElementById('seat');
const rowCell = document.getElementById('row');

chairs.forEach(chair => {
  chair.addEventListener('click', () => {
    const row = chair.dataset.row;
    const seat = chair.dataset.seat;

    seatCell.textContent = seat;
    rowCell.textContent = row;
  });
  
});
vip_chairs.forEach(chair => {
    chair.addEventListener('click', () => {
      
      const row = chair.dataset.row;
      const seat = chair.dataset.seat;
  
      seatCell.textContent = seat;
      rowCell.textContent = row;
    });
    
  });
const standardPrice = document.querySelector('.juststool');
const vipPrice = document.querySelector('.vipstools');
const priceCell = document.getElementById('price');

standardPrice.addEventListener('click', () => {
  const price = standardPrice.querySelector('.justprice').getAttribute('data-price');
  priceCell.textContent = price;
});

vipPrice.addEventListener('click', () => {
  const price = vipPrice.querySelector('.vipprice').getAttribute('data-price');
  priceCell.textContent = price;
});


const stools = document.querySelectorAll('.stool-img, .vipstool');
let selectedStool = null;

stools.forEach((stool) => {
  stool.addEventListener('click', () => {
    if (selectedStool !== null) {
      if (selectedStool.classList.contains('stool-img')) {
        selectedStool.src = 'src/stool.svg';
      } else {
        selectedStool.src = 'src/VipStool.svg';
      }
    }
    if (selectedStool !== stool) {
      if (stool.classList.contains('stool-img')) {
        stool.src = 'src/stool2.svg';
      } else {
        stool.src = 'src/VipStool2.svg';
      }
      selectedStool = stool;
    } else {
      selectedStool = null;
    }
  });
});


