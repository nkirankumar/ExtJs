package com.mypack.model;

public class BaseResponseDTO {
	private String errorMessage;
	private boolean success;

	private Object dataBean;
	private String successMessage;

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public Object getDataBean() {
		return dataBean;
	}

	public void setDataBean(Object dataBean) {
		this.dataBean = dataBean;
	}

	public String getSuccessMessage() {
		return successMessage;
	}

	public void setSuccessMessage(String successMessage) {
		this.successMessage = successMessage;
	}

	@Override
	public String toString() {
		return "BaseResponseDTO [errorMessage=" + errorMessage + ", success="
				+ success + ", dataBean=" + dataBean + ", successMessage="
				+ successMessage + "]";
	}

}
