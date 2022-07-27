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
            <div className='cardgroup'>
              <div className='parentcard'>
                <Card
                  key={item.id}
                  name={item.name}
                  title={item.title}
                  className='parent'
                />
              </div>
              <div className='childcards'>
                {item.children &&
                  item.children.map((child, index) => {
                    return (
                      <>
                        <div className='childcard'>
                          <div class='arrow'>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <Card
                            key={child.id}
                            title={child.title}
                            name={child.name}
                            index={index}
                            className='child'
                          />
                        </div>
                        <div className='grandchildcards'>
                          {child.children &&
                            child.children.map((grandChild, index) => {
                              return (
                                <>
                                  <div className='grandchildcard'>
                                    <div class='arrow'>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                    <Card
                                      key={grandChild.id}
                                      name={grandChild.name}
                                      title={grandChild.title}
                                      hasChildren={grandChild.title}
                                      index={index}
                                      className='grandchild'
                                    />
                                  </div>
                                  {grandChild.children &&
                                    grandChild.children.map(
                                      (greatGrandChild) => {
                                        return (
                                          <>
                                            <Card
                                              key={greatGrandChild.id}
                                              name={greatGrandChild.name}
                                              title={greatGrandChild.title}
                                              hasChildren={
                                                greatGrandChild.title
                                              }
                                              className='greatgrandchild'
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
                                                        key={
                                                          greatGreatGrandChild.id
                                                        }
                                                        name={
                                                          greatGreatGrandChild.name
                                                        }
                                                        title={
                                                          greatGreatGrandChild.title
                                                        }
                                                        hasChildren={
                                                          greatGreatGrandChild.title
                                                        }
                                                        className='greatgreatgrandchild'
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
                                      }
                                    )}
                                </>
                              );
                            })}
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
