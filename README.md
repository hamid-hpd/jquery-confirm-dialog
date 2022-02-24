# jquery-confirm-dialog
# JQuery confirmation dialog

- [JQuery confirmation dialog](#JQuery confirmation dialog)
  * [Requirments](#Requirments)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Configuration](#configuration)
  * [Example Usage](#example-usage)
    + [Default Mode:](#default-mode)
    + [Custome Mode:](#Custome-mode)
	+ [Right to Left:](#right-to-left)
	
## Requirments

   JQuery version >v2
  
## Installation

 To install JQuery confirmation dialog insert confirm.js and confirm.css to your project

    <link href="PATHTO/css/confirm.css" rel="stylesheet">
    <script src="PATHTO/js/confirm.js"></script>



## Usage
```js
     $('#btn').click(function(){
        new Confirm({
          confirm:function (){
             //doSomthing
          },
          cancel:function (){
             //doSomthing
          }
        });
      });

```
## Configuration

To use your own settings, set any of properties you want:
```js
        {
          theme:'white',
          direction:'dltr',
          confirmBtn:'ok',
          cancelBtn:'cancel',
          title:'Confirm',
          message:'Are you sure to continue?',
        }

```
* theme : white or dark
* direction: dltr or drtl
* To change the direction to rtl for Farsi and Arabic languages set direction property value to 'drtl' .
## Example Usage
### Default Mode:

```js
    
	$('#btn').click(function(){
          new Confirm({
            confirm:function (){
               //doSomthing
            },
            cancel:function (){
               //doSomthing
            }
          });
        });
    
    });
```
### Custome Mode:

```js
      $('#btn').click(function(){
          new Confirm({
            theme:'dark',
            confirmBtn:'yes',
            cancelBtn:'no',
            confirm:function (){
               //doSomthing
            },
            cancel:function (){
               //doSomthing
            }
          });
        });
```

### Right to Left:

```js

      $('#btn').click(function(){
          new Confirm({
           direction:'drtl',
           confirmBtn:'بله',
           cancelBtn: 'خیر',
           title:'تایید',
           message:'آیا از ادامه کار مطئن هستید؟',
            confirm:function (){
               //doSomthing
            },
            cancel:function (){
               //doSomthing
            }
          });
      });
		
