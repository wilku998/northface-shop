import React from 'react';

const News = () => (
    <section className="news">
        <div className="news__section row">
            <div className="news__item">
                <h1 className="news__h">2019 Spring Collection</h1>
                <p className="news__p">
                    Praesent vel interdum urna. Vivamus venenatis feugiat turpis sed placerat. Fusce vitae elit vitae enim lobortis ullamcorper quis sed nibh. Aenean et purus pulvinar, blandit nisl eget, eleifend mi. In hac habitasse platea dictumst. Vestibulum et mauris interdum, tincidunt leo non, aliquam nisl. Pellentesque purus neque, sodales in felis eget, ultricies dignissim lacus. Morbi congue pellentesque augue vitae varius. Nunc sed arcu nec felis vestibulum lobortis ac non mi.
                    Aenean et purus pulvinar, blandit nisl eget, eleifend mi. In hac habitasse platea dictumst. Vestibulum et mauris interdum, tincidunt leo non, aliquam nisl. Pellentesque purus neque, sodales in felis eget, ultricies dignissim lacus. Morbi congue pellentesque augue vitae varius. Nunc sed arcu nec felis vestibulum lobortis ac non mi.
                </p>
            </div>

            <div className="news__photo" style={{background: `url(./images/news_1.jpg) center/cover`}}>
                    <span className="news__photo__span">Scandinavian Mountains, Norway 2019</span>
            </div>
        </div>



    </section>
)

export default News;