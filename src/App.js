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
              <div className='childcards cardgroup'>
                {item.children &&
                  item.children.map((child) => {
                    return (
                      <>
                        <div className='childcard'>
                          <div className='arrow'>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <Card
                            key={child.id}
                            title={child.title}
                            name={child.name}
                            number={child.number}
                            className='child'
                          />
                        </div>
                        {child.children &&
                          child.children.map((grandChild) => {
                            return (
                              <>
                                <div className='grandchildcard'>
                                  <div className='arrow'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                  </div>
                                  <Card
                                    key={grandChild.id}
                                    name={grandChild.name}
                                    title={grandChild.title}
                                    number={grandChild.number}
                                    className='grandchild'
                                  />
                                </div>

                                {grandChild.children &&
                                  grandChild.children.map((greatGrandChild) => {
                                    return (
                                      <>
                                        <div className='greatgrandchildcard'>
                                          <div className='arrow'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                          </div>
                                          <Card
                                            key={greatGrandChild.id}
                                            name={greatGrandChild.name}
                                            title={greatGrandChild.title}
                                            className='greatgrandchild'
                                          />
                                        </div>
                                        {greatGrandChild.children &&
                                          greatGrandChild.children.map(
                                            (greatGreatGrandChild) => {
                                              return (
                                                <>
                                                  <div className='arrow'>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                  </div>
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
                                                    className='greatgreatgrandchild'
                                                  />
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
