import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LogOut from './LogOut';
import CreatePost from './CreatePost';
import Blog from './Blog';

const App = () => {
    return (
        <div>
            <header>
                <h1 className='bg-gray-600 text-center text-white '>Firebase Blog App</h1>
            </header>
         <main>
                   
                   <SignUp />
                   <LogIn />
                   <LogOut />

                   
                   <CreatePost />

        
                   <Blog />
               </main>
           </div>
       );
   };

   export default App;