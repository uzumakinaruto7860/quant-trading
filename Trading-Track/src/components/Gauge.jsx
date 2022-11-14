import React, { Component } from "react";
import Gauge from "components-gauge";

export default function Guage() {
    return (
        <Gauge
            animated={true} width={200} height={200} baseStroke={2} filledStroke={2.5} baseColor="#000000" filledColor="#ffff" textColor="#ffff" radius={40} showValue={true} />
    );
}