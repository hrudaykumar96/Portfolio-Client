"use client";

import { MdCheckCircle } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";
import { useAlert } from "@/context/AlertContext";

type Status = "success" | "error" | "warning" | "info";

const Alerts = () => {
  const { alerts } = useAlert();

  const styles: Record<
    Status,
    {
      bg: string;
      text: string;
      icon: React.JSX.Element;
      closebtnBg: string;
      btnHover: string;
      focusVisible: string;
      ringOffset: string;
      closebtnColor: string;
    }
  > = {
    success: {
      bg: "bg-green-50",
      text: "text-green-800",
      icon: (
        <MdCheckCircle className="size-5 text-green-400" ria-hidden="true" />
      ),
      closebtnColor: "text-green-500",
      btnHover: "green-100",
      focusVisible: "green-600",
      ringOffset: "green-50",
      closebtnBg: "bg-green-50",
    },
    error: {
      bg: "bg-red-50",
      text: "text-red-800",
      icon: <GoXCircleFill className="size-5 text-red-400" ria-hidden="true" />,
      closebtnColor: "text-red-500",
      btnHover: "red-100",
      focusVisible: "red-600",
      ringOffset: "red-50",
      closebtnBg: "bg-red-50",
    },
    warning: {
      bg: "bg-yellow-50",
      text: "text-yellow-800",
      icon: (
        <FaExclamationTriangle
          className="size-5 text-yellow-400"
          ria-hidden="true"
        />
      ),
      closebtnColor: "text-yellow-500",
      btnHover: "yellow-100",
      focusVisible: "yellow-600",
      ringOffset: "yellow-50",
      closebtnBg: "bg-yellow-50",
    },
    info: {
      bg: "bg-blue-50",
      text: "text-blue-800",
      icon: (
        <HiInformationCircle
          className="size-5 text-blue-400"
          ria-hidden="true"
        />
      ),
      closebtnColor: "text-blue-500",
      btnHover: "blue-100",
      focusVisible: "blue-600",
      ringOffset: "blue-50",
      closebtnBg: "bg-blue-50",
    },
  };

  const visible = alerts.type ? styles[alerts.type as Status] : null;

  if (!alerts?.message && !alerts?.type && !visible) return null;

  return (
    <div className={`rounded-md ${visible?.bg} p-4 sticky top-0 left-0 right-0 z-50`}>
      {alerts?.message && alerts?.type && (
        <div className="flex justify-center">
          <div className="shrink-0">{visible?.icon}</div>
          <div className="ml-3">
            <p className={`text-sm font-medium capitalize ${visible?.text}`}>
              {alerts.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alerts;
