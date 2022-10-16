import React, { useState }  from 'react';


function Element(){const [isVisible, setIsVisible] = useState(false);

    const handleClick = event => {
        // This switches it from showing and not
      setIsVisible(current => !current);
    };
    return (
      <div>
        {/* This is the button that calls the function to switch the shown */}
        <button class="small_padding" onClick={handleClick}>Show the Link!</button>
        {/* What user sees when it is visible */}
        {isVisible && (
          <div><a href="src/chemistry.html" target="_blank" class="medium_padding" >Link to Webpage</a></div>
        )}
        {/* What user sees when it is not visible */}
        {isVisible }
      </div>
    );
  }
// Exporting the component
export default Element;