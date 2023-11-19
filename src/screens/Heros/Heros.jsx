import React from "react";
import { MasterPrimary } from "../../components/MasterPrimary";
import { MasterSecondary } from "../../components/MasterSecondary";
import "./style.css";

export const Heros = () => {
  return (
    <div className="heros">
      <div className="heros-v">
        <div className="overlap-group">
          <div className="wrapper">
            <div className="frame">
              <div className="div">
                <h1 className="heading">Agent as Cerebrum, Controller as Cerebellum: Implementing an Embodied LMM-based Agent on Drones</h1>
                <h3 className="sub-title">Jiaju Lin<sup className="sup">1,2</sup>,Haoran Zhao<sup className="sup">1,3 *</sup>,Aochi Zhang<sup className="sup">1</sup>,Yiting Wu<sup className="sup">1,4</sup>,Huqiuyue Ping<sup className="sup">1,5</sup>,Qin Chen<sup className="sup">6</sup></h3>
                {/* <p className="sub-title-info"><sup className="sup">1</sup>PTA studio</p>
                <p className="sub-title-info"><sup className="sup">2</sup>Pennsylvania State University,<sup className="sup">3</sup>Beihang University,</p>
                <p className="sub-title-info"><sup className="sup">4</sup>Sun Yat-sen University<sup className="sup">5</sup>Zhejiang University<sup className="sup">6</sup>East China Normal University</p>
                <p className="sub-title-info"><sup className="sup">*</sup>corresponding author: zhaohaoran@buaa.edu.cn</p>
                <p className="sub-title-info"><sup className="sup">2</sup>jjlin.unfake@gmail.com and <sup className="sup">6</sup>qchen@cs.ecnu.edu.cn</p> */}
                <div className="button-set">
                  {/*  href="https://arxiv.org/pdf/2308.04026.pdf" */}
                  <a>
                    <MasterPrimary
                      buttonTextClassName="master-primary-instance"
                      className="master-primary-button"
                      iconLeft={false}
                      iconRight={false}
                      size="default"
                      text="Arxiv Paper"
                      type="primary"
                    />
                  </a>
                  {/*  href="https://youtu.be/buZX6XJiZtE" */}
                  <a>
                    <MasterSecondary
                      buttonTextClassName="master-secondary-instance"
                      className="master-secondary-button"
                      iconLeft={false}
                      iconRight={false}
                      size="default"
                      text="VIDEO"
                      type="primary"
                    />
                  </a>
                </div>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <p className="paragraph">
                  blablablabla
                  </p>
                </div>
                <video controls autoplay muted height={'200px'}>
                    <source src="/static/videoTest.mp4" type="video/mp4"/>
                    您的浏览器不支持 video 标签。
                </video>
                <div className="frame-3">
                  <p className="paragraph">
                  blablablabla
                  </p>
                </div>
                {/* <img
                  className="image"
                  alt="Image"
                  src="https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/image-1.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
