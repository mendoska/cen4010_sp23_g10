
//openPopup for sign-up.html
function openPopup(){
    //pop up window dimensions
    var width = 900;
    var height = 600;
  
    //calculating center position of the popup window
    var left = (screen.width/2) - (width/2);
    var top = (screen.height/2) - (height/2);
    //pop up poperties
    var popup = window.open('', 'popup', 'width='+width+',height='+height+',left='+left+',top='+top+',location=no,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=no');
  
    popup.document.write('Terms of Use for Email Notifications <br><br>Sign Up Form:');
    popup.document.write('<br> <br>');
    popup.document.write('By using this email notifications sign up form, you agree to the following terms and conditions:');
    popup.document.write('<br> <br>');
    popup.document.write ('1. You agree to provide accurate and complete information when signing up for email notifications.')
    popup.document.write('<br> <br>');
    popup.document.write ('2. You agree to receive email notifications from us regarding the topic or topics that you have selected.')
    popup.document.write('<br> <br>');
    popup.document.write ('3. You understand that you may unsubscribe from these email notifications at any time by clicking the unsubscribe link provided in each email.')
    popup.document.write('<br> <br>');
    popup.document.write ('4. You agree to use the email notifications sign up form only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by any third party.')
    popup.document.write('<br> <br>');
    popup.document.write ('5. You agree to indemnify and hold us harmless from any claims, damages, liabilities, costs, or expenses (including without limitation, reasonable attorney\'s fees and expenses\) arising out of or related to your use of the email notifications sign up form.')
    popup.document.write('<br> <br>');
    popup.document.write ('6. We reserve the right to modify or discontinue the email notifications sign up form at any time without prior notice.')
    popup.document.write('<br> <br>');
    popup.document.write ('7. We may terminate your access to the email notifications sign up form at any time for any reason.')
    popup.document.write('<br> <br>');
    popup.document.write ('8. These terms of use shall be governed by and construed in accordance with the laws of Goofy Town. Any disputes arising under or in connection with these terms of use shall be subject to the exclusive jurisdiction of the courts of Goofy Town')
    popup.document.write('<br> <br>');
    popup.document.write ('By submitting your email address and clicking the "Sign Up" button, you acknowledge that you have read, understood, and agreed to these terms of use.')
  
  
    //default function to close popup window
    function closePopup(){
      popup.close();
    }
  
  }
  
  

    