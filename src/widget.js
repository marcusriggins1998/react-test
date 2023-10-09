import { ODataV4Adaptor, ODataAdaptor, WebApiAdaptor, UrlAdaptor, Query } from '@syncfusion/ej2-data';
import { saveAs } from 'file-saver';
import moment from 'moment';
import {
    enrollmentIcon,
    emergencyIcon,
    psychIcon,
    inpatientIcon,
    outpatientIcon,
    medicationIcon,
    procedureIcon,
    inboundIcon,
    outboundIcon,
    callIcon,
    gymIcon,
    transportationIcon,
    dentalIcon,
    visionIcon,
    mealIcon,
    teleDoctorIcon,
    blackCardIcon,
    approveIcon,
    denyIcon,
    oopIcon,
    labIcon,
} from '../icons/svgIcons';

export const GapTypes = {
    0: 'STARS',
    1: 'HCC',
    STARS: 'STARS',
    HCC: 'HCC',
};

//Match GapStatus.cs
export const GapStatuses = {
    Open: 'Open',
    PendingReview: 'Pending Review',
    Query: 'Query',
    ResubmittedAwaitingReview: 'Resubmitted-Awaiting Review',
    ReviewedRejected: 'Reviewed-Rejected',
    ReviewedClosed: 'Reviewed-Closed',
    Pended: 'Pended',
    SecondLevelReview: 'Second Level Review',
    Duplicate: 'Duplicate'
};

export function gapStatusConvertButtonContent(gapStatus) {
    switch (gapStatus) {
        case 'Open':
        case 0:
            return 'Send';
        case 'Query':
        case 2:
            return 'Re-submit';
        case 'PendingReview':
        case 'InReivew':
        case 'FollowUp':
        case 1:
        case 'ResubmittedAwaitingReview':
        case 3:
        case 'ReviewedRejected':
        case 4:
        case 'ReviewedClosed':
        case 5:
            return 'Update';
        case 'Pended':
        case 6:
            return 'Pended';
        case 'Second Level Review':
        case 'SecondLevelReview':
        case 7:
            return 'Second Level Review';
        default:
            return 'Invalid';
    }
}

export const fileRequestTypes = {
    advancedSearchResultsExcel: 'advancedSearchResultsExcel',
    patientListSearchResultsExcel: 'patientListSearchResultsExcel',
    patientWithOpenGaps_exportExcel: 1,
    upcomingAnnualVisits_exportExcel: 2,
    pastAnnualVisits_exportExcel: 3,
    allPatients_exportExcel: 4,
    gapsInReview_exportExcel: 5,
};

export const filterControlType = {
    MultiSelect: 'MultiSelect',
    TextBox: 'TextBox',
    CheckBox: 'CheckBox',
    NumericTextBox: 'NumericTextBox',
    DatePicker: 'DatePicker',
    DateRangePicker: 'DateRangePicker',
    Selection: 'Selection',
    DateTimePicker: 'DateTimePicker',
    RadioButton: 'RadioButton',
    sectionHeader: 'sectionHeader',
    GoogleAutoComplete: 'GoogleAutoComplete',
    CascadingMultiSelect: 'CascadingMultiSelect',
    AutoComplete: 'AutoComplete',
};

export const memberDataTypes = {
    allergies: 'allergies',
    audits: 'audits',
    projectedRiskScores: 'projectedRiskScores',
    diagnosis: 'diagnosis',
    clinicalAlerts: 'clinicalAlerts',
    hccAlerts: 'hccAlerts',
    labs: 'labs',
    medications: 'medications',
    procedures: 'procedures',
    visits: 'visits',
    vitals: 'vitals',
    medicalClaims: 'medicalClaims',
    authorizations: 'authorizations',
    eligibility: 'eligibility',
    providerHistory: 'providerHistory',
    advancedSearch: 'advancedSearch',
    singleMemberSearch: 'singleMemberSearch',
    eligibilitySearch: 'eligibilitySearch',
    userManagementUserReport: 'userManagementUserReport',
    claimAuditor: 'claimAuditor',
    myUpcomingVisits: 'myUpcomingVisits',
    myPastVisits: 'myPastVisits',
    myAllVisits: 'myAllVisits',
    generic: 'generic',
};

export const searchTypes = {
    mainSearch: 'mainSearch',
    advancedSearch: 'advancedSearch',
    singleMemberSearch: 'singleMemberSearch',
};

export const eventTypes = {
    default: 'default',
    medication: 'medication',
    procedure: 'procedure',
    communication: 'communication',
    benefit: 'benefit',
    oopDetail: 'oopDetail',
    authorization: 'authorization',
    lab: 'lab',
};

export const moduleIdMap = {
    None: 0,
    DailyCensus: 1,
    ClinicalAlerts: 2,
    HCCAlerts: 3,
    HEDIS: 4,
    Jumpstart: 5,
    AlertWorkflowUtility: 6,
    JSAAdminProviders: 7,
    JSAAdminAssessments: 8,
    JSAReportsPending: 9,
    JSAReportsOutreach: 10,
    JSAReportsCompleteAndInProgress: 11,
    P360PatientViewer: 12,
    CareGapWorklist: 13,
    CareGapAllPatients: 14,
    CareGapDashboards: 15,
    CareGapGuidelines: 16,
    IPADashBoard: 17,
    UserManagementUsers: 18,
    UserManagementGroups: 19,
    UserManagementProviders: 20,
    P360Details: 21,
    ClaimsOutliers: 22,
    UserManagementOrganizations: 23,
    RXClaimOutliers: 24,
    StarDashboard: 25,
    PCPDashboard: 26,
    NCIPADashBoard: 27,
    AVAExpresEligibility: 28,
    AccessExpressWorkLists: 29,
    AccessExpressMessagesEmail: 30,
    AVAExpressEligibilitySpecialist: 31,
    AccessExpressSupport: 32,
    JSAOutreach: 33,
    JSAAssessment: 34,
    JSADashboards: 35,
    Audit: 36,
    CensusDailyCensus: 37,
    CensusDischargeManagement: 38,
    CensusAdmission: 51,
    CensusFrequesntFlyer: 39,
    CensusDashboards: 40,
    DisenrollmentDashboards: 42,
    PatientPriorityGapsReview: 43,
    UserManagementUsersReport: 44,
    ClaimsAuditor: 45,
    AvaCharts: 46,
    QueryManager: 47,
    JSASearch: 48,
    MyQueue: 49,
    DisenrollmentAdvancedSearch: 50,
    Messages: 59,
};

export const endpointNames = {
    Campaign: 'Campaign',
    Case: 'Case',
    Task: 'Task',
    CampaignMember: 'CampaignMember',
};

export const adaptorTypes = {
    ODataV4: 'ODataV4',
    OData: 'OData',
    WebApi: 'WebApi',
    Url: 'Url',
};

export const dynamicQueryTypes = {
    DataManagerQuery: 'DataManagerQuery',
    TraversalGraphQuery: 'TraversalGraphQuery',
    DynamicGraphQuery: 'DynamicGraphQuery',
    CustomGraphQuery: 'CustomGraphQuery',
};

export const adaptorMap = {
    ODataV4: ODataV4Adaptor,
    OData: ODataAdaptor,
    WebApi: WebApiAdaptor,
    Url: UrlAdaptor,
};

export const outreachStatuses = [
    'Successful Contact',
    'Request call back',
    'Left voicemail or message',
    'Busy / Line just rings / No VM',
    'Phone line disconnected',
    'Wrong Number',
    'Other',
];

export const derReasons = [
    'Error - Joined AHP in Error / Return to Previous Plan',
    'Error - Unaware of Disenrollment',
    'Error - Misled by Sales Agent',
    'Part D - Coverage Gap',
    'Part D - Drug Cost/Co-Pay',
    'Part D - Drug Not on Formulary',
    'Part D - Pharmacy',
    'Network - PCP Not Contracted',
    'Network - Quality of PCP/Office',
    'Network - Specialist Not Contracted',
    'Network - Quality of Specialist',
    'Network - Drive Time/Distance',
    'Network - IPA Not Contracted',
    'Network - Hospital Not Contracted',
    'Health Plan Operations - Prior Authorization Process',
    'Health Plan Operations - Customer Service',
    'Prefers Other Benefits/Dissatisfied with - Specialist Copay',
    'Prefers Other Benefits/Dissatisfied with - Hospital/ER Copay',
    'Prefers Other Benefits/Dissatisfied with - Monthly Premium',
    'Prefers Other Benefits/Dissatisfied with - MOOP Limit',
    'Prefers Other Benefits/Dissatisfied with - Part B Reduction',
    'Prefers Other Benefits/Dissatisfied with - OTC',
    'Prefers Other Benefits/Dissatisfied with - Vision',
    'Prefers Other Benefits/Dissatisfied with - Hearing',
    'Prefers Other Benefits/Dissatisfied with - Dental',
    'Prefers Other Benefits/Dissatisfied with - Transportation',
    'Prefers Other Benefits/Dissatisfied with - Fitness/Gym',
    'Prefers Other Benefits/Dissatisfied with - Other',
    'Other - Loss of Part A Medicare Benefit',
    'Other - Loss of Part B Medicare Benefit',
    'Other - Prefers Original FFS Medicare',
    'Other - Prefers Medi-Medi',
    'Other - Employer Requires Sponsored Plan',
    'Other - Long Term Care / Institutionalized',
    'Other - Moved Out of Area',
    'No Reason / Refused / Unable to Obtain',
];

export const newPlanSources = [
    'Sales Agent on Record',
    'New Sales Agent',
    'PCP or Specialist Office',
    'Friend/Family (Not Sales Agent)',
    'Self',
    'Refused / Unable to Obtain',
];

export const disenrollmentStatuses = [
    'Cancelled Enrollment App with Other Health Plan',
    'Re-Enrollment No Gap in Coverage',
    'Re-Enrollment Gap in Coverage',
    'Re-Enrollment Through Medicare',
    'Member will proceed to disenroll',
];

export function getEventIcon(type) {
    switch (type) {
        case 'ENR.':
            return enrollmentIcon;
        case 'ER':
            return emergencyIcon;
        case 'PF':
            return psychIcon;
        case 'IP':
            return inpatientIcon;
        case 'OBS':
            return outpatientIcon;
        case 'RX':
            return medicationIcon;
        case 'PROC':
            return procedureIcon;
        case 'INBOUND':
            return inboundIcon;
        case 'OUTBOUND':
            return outboundIcon;
        case 'CALL':
            return callIcon;
        case 'GYM':
            return gymIcon;
        case 'TRANSPORTATION':
            return transportationIcon;
        case 'DENTAL':
            return dentalIcon;
        case 'VISION':
            return visionIcon;
        case 'BLACKCARD':
            return blackCardIcon;
        case 'MEAL':
            return mealIcon;
        case 'TELEDOCTOR':
            return teleDoctorIcon;
        case 'APPROVED':
            return approveIcon;
        case 'DENIED':
            return denyIcon;
        case 'OOP':
            return oopIcon;
        case 'LAB':
            return labIcon;
        default:
            return enrollmentIcon;
    }
}

export function getFileNameFromResponse(xhr) {
    var filename = '';
    var disposition = xhr.getResponseHeader('Content-Disposition');
    if (disposition && disposition.indexOf('attachment') !== -1) {
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec(disposition);
        if (matches !== null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }
    }
    return filename;
}

export function xMonthsAgo(x) {
    return new Date().setMonth(new Date().getMonth() - x);
}

export const ValidDateConstants = {
    MINYEAR: 1970,
    MAXYEAR: 2100
}

export function isValidDate(dateStr) {
    if (!dateStr) {
        return false;
    }
    const m = moment(dateStr, 'M/D/YYYY', true);
    return (m.isValid() && m.year() >= ValidDateConstants.MINYEAR && m.year() <= ValidDateConstants.MAXYEAR);
}

export function isValidDateRange(dateRangeStr) {
    if (!dateRangeStr) {
        return false;
    }
    let dates = dateRangeStr.split("to");
    if (dates.length !== 2) {
        return false;
    }
    dates = dates.map((date) => date.trim());
    return dates.every((date) => isValidDate(date)) && moment(dates[0], 'M/D/YYYY') <= moment(dates[1], 'M/D/YYYY');
}

export function formatDate(date, emptyValue = '') {
    if (!date || date.length === 0) return emptyValue;
    const m = moment(date);
    return m.isValid() ? m.format('MM/DD/YYYY') : date;
}

export function formatUTCDate(date, emptyValue = '') {
    if (!date || date.length === 0) return emptyValue;
    const m = moment.utc(date).startOf('day');
    return m.isValid() ? m.format('MM/DD/YYYY') : date;
}

export function formatISODate(date, emptyValue = '') {
    if (!date) return emptyValue;
    const m = moment(date);
    return m.isValid() ? m.format('yyyy-MM-DD') : date;
}

export function formatDateTime(dateTime, includeSeconds) {
    if (!dateTime) return '';
    const m = moment(dateTime);
    if (!m.isValid()) {
        return dateTime;
    }
    if (m.millisecond() >= 502) {
        m.add(1, 'seconds');
    }
    return m.format(includeSeconds ? 'L LTS' : 'L LT');
}

export function formatISODateTime(dateTime) {
    if (!dateTime || dateTime.length === 0) return '';
    const m = moment(dateTime);
    return m.isValid() ? m.format('YYYY-MM-DD HH:mm:ss') : dateTime;
}

export function saveFileRequestResult(response, xhr) {
    var fileName = getFileNameFromResponse(xhr);
    var fileType = xhr.getResponseHeader('content-type');
    var receivedFileBlob = new Blob([response], { type: fileType });
    saveAs(receivedFileBlob, fileName);
}

// These enum values should exactly match the AHC.VNext.Core.JSA.Models.JSAType class.
// If you are changing this file in any way, make sure you do the same changes
// to the JSAType.cs file.
export const jsaTypeParser = {
    FacetoFace: 0,
    ComprehensiveHRA: 1,
    MiniJSA: 2,
    InitialHealthAssessment: 3,
    HealthReassessment: 4,
    COC: 5,
    FullFallEvaluation: 6,
    SocialDeterminants: 7,
    DepressionScreening: 8,
    FunctionalStatusADL: 9,
    ClinicalGaps: 12,
    0: 'Face to Face',
    3: 'Initial Health Assessment (I-HRA)',
    4: 'Health Reassessment (R-HRA)',
    12: 'Clinical Gaps',
};

export const jsaTypeDescriptionParser = {
    'Face to Face': 0,
    'Comprehensive HRA': 1,
    'Mini JSA': 2,
    'Initial Health Assessment (I-HRA)': 3,
    'Health Reassessment (R-HRA)': 4,
    COC: 5,
    'Full Fall Evaluation': 6,
    'Social Determinants': 7,
    'Depression Screening': 8,
    'Functional Status ADL': 9,
    'Clinical Gaps': 12,
};

export const jsaStatusTypes = {
    Started: 0,
    Completed: 1,
    NotStarted: 2,
};

//Conversion for JSA Type to provide space, dash or more details etc.
export const JSATypeEnumToStringConverter = [
    { value: 'FaceToFace', text: 'Face to Face' },
    { value: 'InitialHealthAssessment', text: 'Initial Health Assessment (I-HRA)' },
    { value: 'HealthReassessment', text: 'Health Reassessment (R-HRA)' },
    { value: 'ClinicalGaps', text: 'Clinical Gaps' },
];

export const jsaStatusConverter = [
    { text: 'Not Started', value: 'NotStarted' },
    { text: 'Completed', value: 'Completed' },
    { text: 'Started', value: 'Started' },
];

//should match ChartReviewStatus.cs file
export const ChartReviewStatuses = {
    ReadyForValidation: 'ReadyForValidation',
    SplitAndValidated: 'SplitAndValidated',
    ValidatedRejected: 'ValidatedRejected',
    PendingReview: 'PendingReview',
    ReviewRejected: 'ReviewRejected',
    ReviewClosed: 'ReviewClosed',
    Query: 'Query',
    ResubmittedAwaitingReview: 'ResubmittedAwaitingReview',
    SecondLevelReview: 'SecondLevelReview',
    Pended: 'Pended',
    Duplicate: 'Duplicate',
    NonCompliant: 'NonCompliant',
    NoOpenGap: 'NoOpenGap',
    ReUploadNeeded: 'ReUploadNeeded',
};

export function prune(array, modules, i, returnArray) {
    if (i === undefined) return prune(array, modules, 0, []);
    return new Promise((resolve, reject) => {
        if (!array || i === array.length) return resolve(returnArray);
        const obj = Object.assign(array[i]);
        if (array[i].nodeChild) {
            prune(array[i].nodeChild, modules).then((childArray) => {
                if (childArray.length > 0) {
                    obj.nodeChild = childArray;
                    returnArray.push(obj);
                }
                prune(array, modules, ++i, returnArray).then((result) => {
                    return resolve(result);
                });
            });
        } else {
            if (!obj.url || !obj.moduleId || modules[obj.moduleId]) {
                returnArray.push(obj);
            }
            prune(array, modules, ++i, returnArray).then((result) => {
                return resolve(result);
            });
        }
    });
}

function _getSearchKey(id) {
    return id;
}

export function getFilterURLParameterValues(filters, getSearchKey = _getSearchKey) {
    if (!filters) return [];

    const parameters = [];
    for (const id of Object.keys(filters)) {
        const searchKey = getSearchKey(id);
        const value = filters[id];
        if (value !== undefined && value !== null && searchKey.length > 0) {
            if (Array.isArray(value) && value.length > 0) {
                parameters.push(`${searchKey}=${encodeURIComponent(value.join(','))}`);
            } else if (value instanceof Date) {
                parameters.push(`${searchKey}=${encodeURIComponent(formatDate(value))}`);
            } else if (typeof value === 'boolean') {
                parameters.push(`${searchKey}=${value}`);
            } else if (typeof value === 'number') {
                parameters.push(`${searchKey}=${value}`);
            } else if (value.length > 0) {
                parameters.push(`${searchKey}=${encodeURIComponent(value)}`);
            }
        }
    }

    return parameters;
}

export function mapFilterArraysToValues(filters) {
    for (const id of Object.keys(filters)) {
        const value = filters[id];
        if (Array.isArray(value)) {
            if (value.length > 0) {
                const joinedStrings = value.join(',');
                filters[id] = joinedStrings;
            } else {
                delete filters[id];
            }
        }
    }
}

export function getQueryWithParams(filters, getSearchKey = _getSearchKey) {
    if (!filters) return new Query();
    const query = new Query();
    for (var id of Object.keys(filters)) {
        var searchKey = getSearchKey(id);
        var value = filters[id];
        query.addParams(searchKey, value);
    }
    return query;
}

export function getColumnsFromFields(data) {
    const columns = [];
    for (const key in data[0]) {
        const column = {
            field: key,
            type: 'string',
            headerText: key,
            width: Math.max(key.length * 15 + 40, Math.min(400, data[0][key].length * 15)),
        };
        if (Number.isInteger(data[0][key]) && key.includes('Date')) {
            column.type = 'date';
            column.format = 'yMd';
            column.width = Math.max(key.length * 15 + 40, 130);
        } else if (typeof data[0][key] === 'boolean') {
            column.type = 'boolean';
            column.displayAsCheckBox = true;
            column.width = Math.max(key.length * 15 + 40, 50);
        } else if (!isNaN(data[0][key])) {
            column.type = 'number';
            column.width = Math.max(key.length * 15 + 40, data[0][key].toString().length * 15);
        }
        columns.push(column);
    }
    return columns;
}

export function calculateAge(dobTimestamp) {
    return new Date(new Date() - new Date(dobTimestamp)).getFullYear() - 1970;
}

export function getProjectionsFromColumns(columns) {
    return `project(${columns.map((column) => `'${column.field}'`).join(',')}).${columns
        .map((column) => (column.projection ? `by(${column.projection})` : `by('${column.field}')`))
        .join('.')}`;
}

export const isNotFutureDateTimePacific = (date) => {
    if (!date) {
        return true;
    }
    const ISODateTime = formatISODateTime(date);
    const ISOPacificDateTime = formatISODateTime(pacificTimeNow());
    if (ISODateTime > ISOPacificDateTime) {
        return false;
    }
    return true;
};

export const isNotFutureDatePacific = (date) => {
    if (!date) {
        return true;
    }
    const ISODate = formatISODate(date);
    const ISOPacificDate = formatISODate(pacificTimeNow());
    if (ISODate > ISOPacificDate) {
        return false;
    }
    return true;
};

export function pacificTimeNow() {
    return new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
}

export function getYearAndMonth(monthNum) {
    if (!monthNum) {
        return '';
    }
    const year = parseInt(monthNum / 12);
    const month = monthNum % 12;
    const yearStr = year > 0 ? year + (year > 1 ? 'yrs' : 'yr') : '';
    const monthStr = month + (month > 1 ? 'mos' : 'mo');

    return `${yearStr} ${monthStr}`;
}

export function timestampToLocaleString(stamp) {
    if (isNaN(stamp)) {
        return '';
    }
    return new Date(stamp).toLocaleString();
}

export const ChartStatus = {
    ReadyForValidation: 'Ready for Validation',
    SplitAndValidated: 'Split - Validated',
    ValidatedRejected: 'Validated - Rejected',
    PendingReview: 'Pending Review',
    ReviewRejected: 'Review Rejected',
    ReviewClosed: 'Review Closed',
    Query: 'Query',
    ResubmittedAwaitingReview: 'Resubmitted - Awaiting Review',
    SecondLevelReview: 'Second Level Review',
    Pended: 'Pended',
    Duplicate: 'Duplicate',
    NonCompliant: 'Non-Compliant',
    NoOpenGap: 'No Open Gap',
    ReUploadNeeded: 'Re-Upload Needed',
};

//Match MemberPbpType.cs
export const MemberPBPType = {
    NonVirtual: 'NonVirtual',
    Virtual: 'Virtual',
    All: 'All',
};

export const modules = {
    PatientPriority: 'PatientPriority',
    EligibilityAndBenefits: 'EligibilityAndBenefits',
    Authorizations: 'Authorizations',
    ClaimsInquiry: 'ClaimsInquiry',
    ReportsSubmissionort: 'ReportsSubmission',
};

export function guidelinesData(moduleId) {
    switch (moduleId) {
        case 'EligibilityAndBenefits':
            return {
                id: 'AVAEligibilityandBenefitsUserGuidepdfContainer',
                fileName: '/AVA_Eligibility_and_Benefits_User_Guide.pdf',
                title: 'AVA Eligibility and Benefits User Guide',
            };
        case 'Authorizations':
            return {
                id: 'AVAAuthorizationUserGuidepdfContainer',
                fileName: '/AVA_Authorization_User_Guide.pdf',
                title: 'AVA Authorizations User Guide',
            };
        case 'ClaimsInquiry':
            return {
                id: 'AVAClaimsUserGuidepdfContainer',
                fileName: '/AVA_Claims_User_Guide.pdf',
                title: 'AVA Claims User Guide',
            };
        case 'ReportsSubmission':
            return {
                id: 'AVAReportsSubmissionUserGuidepdfContainer',
                fileName: '/AVA_Reports_Submission_User_Guide.pdf',
                title: 'AVA Reports Submission User Guide',
            };
    }
}
