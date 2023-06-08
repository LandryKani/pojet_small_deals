import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../buttons/Button.styled';


function AdvertComments() {
    return (
        <div className="block__comments">
            <div className="comments__previews">Previews</div>
            <div className="user__comments">
                <div className="profile_user display__flex">
                    <div className="picture__user_comment"><i className="fa-solid fa-circle-user"></i></div>
                    <div className="name_and_evaluation__user">
                        F.Francis
                        <div className="evaluation__user">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="content_comments_user">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley .
                    </p>
                    <div className="comment_user_date">2022-03-30</div>
                </div>
            </div>
            <div className="user__comments">
                <div className="profile_user display__flex">
                    <div className="picture__user_comment"><i className="fa-solid fa-circle-user"></i></div>
                    <div className="name_and_evaluation__user">
                        Oreol Noumodong
                        <div className="evaluation__user">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="content_comments_user">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley .
                    </p>
                    <div className="comment_user_date">2022-03-30</div>
                </div>
            </div>
            <div className="more__comment">
                <ul className="more__comment_number">
                    <li className="item_number_comment">
                        <Button
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                            icon={<i className="fa-solid fa-arrow-left"></i>}
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            title='1'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            title='2'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment active">
                        <Button
                            title='3'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            title='4'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            title='5'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            title='6'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            title='7'
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                        />
                    </li>
                    <li className="item_number_comment">
                        <Button
                            variant="button"
                            bgcolor="transparent"
                            maxWidth="39px"
                            height='40px'
                            borderRadius="0"
                            border="none"
                            color="#fff"
                            icon={<i className="fa-solid fa-arrow-right"></i>}
                        />
                    </li>
                </ul>
            </div>
            <div className="current_comments">
                <h3>Your review rating</h3>
                <div className="evaluation__user">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <form action="#" method="post">
                    <p>Your review</p>
                    <textarea name="current_comment" id="comment"></textarea>
                    <button type="submit" className=" btn__red">Submit review</button>
                </form>
            </div>
        </div>
    )
}

export default AdvertComments