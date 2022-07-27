import React, { useContext } from 'react';
import { DarkThemeContext } from './darkThemeContext';
import Card from './Card';
import { ds } from './chart';

const App = () => {
  const { darkMode, setTheme } = useContext(DarkThemeContext);
  console.log(darkMode);
  return (
    <div className='app'>
      <div>
        <button
          className='fab'
          type='primary'
          onClick={() => {
            setTheme(!darkMode);
          }}
        >
          <p>Change</p>
        </button>
      </div>
      <div className='cards'>
        {ds.map((item) => {
          return (
            <>
              <Card
                key={item.id}
                name={item.name}
                title={item.title}
                type='parent'
              />
              <div class='arrow'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {item.children &&
                item.children.map((child) => {
                  return (
                    <>
                      <Card
                        key={child.id}
                        title={child.title}
                        name={child.name}
                      />
                      <div class='arrow'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      {child.children &&
                        child.children.map((grandChild) => {
                          return (
                            <>
                              <Card
                                key={grandChild.id}
                                name={grandChild.name}
                                title={grandChild.title}
                              />
                              <div class='arrow'>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                              {grandChild.children &&
                                grandChild.children.map((greatGrandChild) => {
                                  return (
                                    <>
                                      <Card
                                        key={greatGrandChild.id}
                                        name={greatGrandChild.name}
                                        title={greatGrandChild.title}
                                      />
                                      <div class='arrow'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                      </div>
                                      {greatGrandChild.children &&
                                        greatGrandChild.children.map(
                                          (greatGreatGrandChild) => {
                                            return (
                                              <>
                                                <Card
                                                  key={greatGreatGrandChild.id}
                                                  name={
                                                    greatGreatGrandChild.name
                                                  }
                                                  title={
                                                    greatGreatGrandChild.title
                                                  }
                                                />
                                                <div class='arrow'>
                                                  <span></span>
                                                  <span></span>
                                                  <span></span>
                                                </div>
                                              </>
                                            );
                                          }
                                        )}
                                    </>
                                  );
                                })}
                            </>
                          );
                        })}
                    </>
                  );
                })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
