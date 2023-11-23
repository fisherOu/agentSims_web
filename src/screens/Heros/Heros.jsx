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
                <h3 className="sub-title">Haoran Zhao<sup className="sup">1,3*</sup>, Fengxing Pan<sup className="sup">1,3</sup>, Huqiuyue Ping<sup className="sup">2,3</sup>, Yaoming Zhou<sup className="sup">1*</sup></h3>
                <p className="sub-title-info"><sup className="sup">1</sup>Beihang University, <sup className="sup">2</sup>Zhejiang University, <sup className="sup">3</sup>qingniaoAI</p>
                <p className="sub-title-info"><sup className="sup">1</sup>{"{"}<span style={{fontStyle:"italic"}}>zhaohaoran,panfengxing,zhouyaoming</span>{"}"}@buaa.edu.cn<sup className="sup">2</sup><span style={{fontStyle:"italic"}}>pinghqy</span>@126.com</p>
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
                {/* <div className="frame-3">
                  <p className="paragraph">
                  blablablabla
                  </p>
                </div> */}
                <video controls autoplay muted height={'200px'}>
                    <source src="/static/videoTest.mp4" type="video/mp4"/>
                    video not supported
                </video>
                <div className="frame-3">
                  <p className="paragraph">
                  Videos of other experiments are coming soon.
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
