// Important Note:
// Content ids should be used from confluence page:
// https://d3.ce.capgemini.com/confluence/display/BNOTK/Content

export const translationDe = {
  common: {
    buttons: {
      'button-create': 'Erstellen',
      'uvz-view-year-end-button-create-alternative':
        'Jahresabschluss erstellen',
      'button-export': 'Exportieren',
      'button-export-report': 'Bericht exportieren',
      'button-export-successor': 'Durchführen',
      'button-export-view-protocol': 'Protokoll einsehen',
      'uvz-button-issuedocumentcopy': 'Abschrift erstellen',
      logout: 'Abmelden',
      save: 'Speichern',
      'alt-text-button-save': 'Eintrag zwischenspeichern',
      saveAndClose: 'Speichern & Schließen',
      'alt-text-button-save-and-close':
        'Eintrag zwischenspeichern und Reiter schließen',
      cancel: 'Abbrechen',
      'alt-text-button-cancel': 'Reiter oder Dialog abbrechen',
      open: 'Öffnen',
      openAlternativeText: 'Ausgewählte Einträge öffnen',
      export: 'Exportieren',
      overviewExport: 'Übersicht Exportieren',
      new: 'Neu',
      'alt-text-button-new': 'Neuen Eintrag anlegen',
      'overview-column-configuration-button-reset':
        'Standard Wiederherstellen',
      edit: 'Bearbeiten',
      'alt-text-button-edit': 'Ausgewählte Einträge bearbeiten',
      submit: 'Eintragen',
      'alt-text-button-submit': 'Eintrag verbindlich eintragen',
      submitAndClose: 'Eintragen & Schließen',
      'alt-text-button-submit-and-close':
        'Eintrag verbindlich eintragen und Reiter schließen',
      reject: 'Verwerfen',
      'uvz-document-correction-note-reject-alt':
        'Korrekturvermerk verwerfen',
      'uvz-document-copy-note-reject-alt':
        'Ausvertigungserteilung verwerfen',
      refuse: 'Zurückweisen',
      'uvz-document-correction-note-refuse-alt':
        'Korrekturvermerk zurückweisen',
      'uvz-document-copy-note-refuse-alt':
        'Ausfertigungserteilung zurückweisen',
      sign: 'Signieren',
      'alt-text-button-sign': 'Ausgewählte Einträge signieren',
      annualReport: 'Jahresabschluss',
      ok: 'OK',
      successorDepositing: 'Amtsübergabe',
      viewProtocol: 'Protokoll einsehen',
      'alt-text-button-viewProtocol': 'Ausgewählte Einträge protokoll einsehen',
      settings: 'Einstellungen UVZ',
      yes: 'Ja',
      no: 'Nein'
    },
    search: {
      'search-button-extended-search': 'Erweiterte Suche',
      'uvz-overview-entry': 'Eintrag',
      'uvz-overview-entries': 'Einträge',
      'search-field-search-name': 'Neue Suche speichern',
      'search-button-save': 'Speichern',
      'search-button-remove': 'Löschen',
      'search-button-new-search': 'Neue Suche',
      'search-quick-search-text': 'Suchen',
      'overview-quicksearch-default-text': 'Suchbegriff eingeben',
      'overview-quicksearch-icon': 'Schnellsuche ausführen'
    },
    errors: {
      required: 'Pflichtfeld, bitte ausfüllen', // content id refers to error-mandatory-field
      futureDate: 'Datum darf nicht in der Zukunft liegen', // content id refers to error-date-in-future
      ngbDate: 'Format [TT.MM.JJJJ] verwenden', // content id refers to error-use-format
      numberUniquenessViolation:
        'Die von Ihnen gewählte Nummer ist bereits vergeben.', // content id refers to error-number-already-used
      pattern: 'Nur Zahlen verwenden.',
      maxlength: 'Maximal {{requiredLength}} Zeichen angeben.',
      noSearchResults:
        'Es wurden keine Einträge gefunden. Bitte passen Sie die Suchparameter an.',
      officialActivityRequired: 'Bitte selektieren',
      depositedNameRequired: 'Bitte den Notarnamen eingeben',
      noDepositedOfficialActivitySelected:
        'Bitte eine Amtstätigkeit auswählen',
      'error-madatory-field': 'Pflichtfeld, bitte ausfüllen.',
      backendNotAvailable:
        'Die Datenbank ist zurzeit nicht erreichbar. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
      'error-no-rights':
        'Sie haben keine Berechtigung diese Aktion durchzuführen.',
      'bad-request': 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
      'error-data-cannot-be-saved':
        'Eintrag kann nicht gespeichert werden, da einige Daten inkorrekt sind. Bitte korrigieren Sie Ihre Eingaben.',
      'forbidden-request': 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte melden Sie sich erneut an.',
      'method-not-allowed': 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
      'not-found-error': 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
      'unlocking-deed-entry-failed': 'Ein UVZ Eintrag konnte nicht wieder freigegeben werden.',
      'update-failed-because-of-missing-lock': 'UVZ-Eintrag ist nicht für einen schreibenden Zugriff durch diesen Benutzer gesperrt. ' +
        'Die übergebenen Daten des UVZ-Eintrages können nicht gespeichert werden.',
      submitting_not_possible: 'Der UVZ-Eintrag ist fehlerhaft und wurde nicht eingetragen.',
      json_processing_exception: 'Beim Verwerfen oder Zurückweisen einer Ausfertigungserteilung oder eines Korrekturvermerks sind keine weiteren Änderungen erlaubt',
      'uvz-documents-validation-error-missing-note': 'Vermerk erforderlich'
    },
    warnings: {
      'uvz-number-format-warning-title': 'Urkundenverzeichnis nicht verfügbar',
      'uvz-number-format-warning-text': 'Das Urkundenverzeichnis ist nicht konfiguriert. Bitte versuchen Sie es zu einem späteren Zeitpunkt.'
    },
    state: {
      'state-entry-title': 'Status',
      'state-entry-in-preparation': 'In Vorbereitung',
      'state-entry-to-be-signed': 'Zu Signieren',
      'state-entry-submitted': 'Eingetragen',
      'state-entry-submitted-with-correction-flag':
        'Eingetragen (mit Fehlerkennzeichen)',
      'state-business-objects-in-preparation': 'In Vorbereitung',
      'state-business-objects-to-be-signed': 'Zu Signieren',
      'state-business-objects-signed': 'Bestätigt',
      'state-business-objects-refused': 'Zurückgewiesen'
    },
    grid: {
      noRowsToShow: 'Es gibt keine Enträge zur Anzeige',
      loadingOoo: 'Einträge werden geladen...'
    },
    labels: {
      yes: 'Ja',
      no: 'Nein'
    },
    enums: {
      EnumUVZStatus: {
        IN_PREPARATION: 'In Vorbereitung',
        TO_BE_SIGNED: 'Zu Signieren',
        SUBMITTED: 'Eingetragen',
        SUBMITTED_WITH_CF: 'Eingetragen (mit Fehlerkennzeichen)'
      },
      EnumSourceApplication: {
        UVZ: 'UVZ',
        EXTERNALSYSTEM: 'Externes System'
      },
      EnumUVZErrorKey: {
        // generic - fallback
        GENERIC_UNEXPECTED_ERROR: 'Die Datenbank ist zurzeit nicht erreichbar. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
        GENERIC_NOT_FOUND: 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
        GENERIC_NOT_AUTHENTICATED: 'Ungültiger Benutzer',
        GENERIC_FORBIDDEN: 'Sie haben keine Berechtigung diese Aktion durchzuführen.',
        GENERIC_PARAMETER_MISSING: 'Die Aktion konnte nicht ausgeführt werden. Bitte wiederholen Sie die Aktion. Sollte der Fehler bestehen bleiben, versuchen Sie es bitte zu einem späteren Zeitpunkt erneut.',
        GENERIC_BAD_REQUEST: 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
        GENERIC_METHOD_NOT_ALLOWED: 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',
        GENERIC_EMPTY_RESULT: 'Leeres Ergebnis',
        DEED_REGISTRY_LOCKED: 'Die Aktion kann nicht durchgeführt werden, da gerade eine Verwahrungsübergabe stattfindet. Bitte versuchen Sie es zu einem späteren Zeitpunkt.',

        // deed entry handling
        SUBMITTING_NOT_POSSIBLE: 'Der UVZ-Eintrag ist fehlerhaft und wurde nicht eingetragen.', // UVZ-DE-002
        INCORRECT_SORT_PROPERTY: 'Ein Problem in der Server-Kommunikation ist aufgetreten. Bitte versuchen Sie es zu einem späteren Zeitpunkt.', // UVZ-DE-003
        UNALLOWED_STATUS_CHANGE: 'Die Aktion konnte nicht ausgeführt werden. Bitte wiederholen Sie die Aktion. Sollte der Fehler bestehen bleiben, versuchen Sie es bitte zu einem späteren Zeitpunkt erneut.',
        UNALLOWED_ID_FOR_CREATE: 'Die Aktion konnte nicht ausgeführt werden. Bitte wiederholen Sie die Aktion. Sollte der Fehler bestehen bleiben, versuchen Sie es bitte zu einem späteren Zeitpunkt erneut.', // UVZ-DE-005
        JSON_PROCESSING_EXCEPTION: 'Beim Verwerfen oder Zurückweisen einer Ausfertigungserteilung oder eines Korrekturvermerks sind keine weiteren Änderungen erlaubt', // UVZ-DE-006
        DEED_ENTRY_NOT_FOUND: 'Der angefragte UVZ-Eintrag konnte nicht gefunden werden.', // UVZ-DE-008
        INCORRECT_DATA_FOR_SAVE: 'Eintrag kann nicht gespeichert werden, da einige Daten inkorrekt sind. Bitte korrigieren Sie Ihre Eingaben.',  // UVZ-DE-001
        LOCK_ALREADY_EXISTS_ERROR_CODE: 'UVZ-Eintrag ist bereits für einen schreibenden Zugriff durch einen anderen Benutzer gesperrt. ' +
          'Die übergebenen Daten des UVZ-Eintrages können nicht gespeichert werden.',
        LOCK_ALREADY_CREATED_BY_ANOTHER_USER: 'UVZ-Eintrag ist nicht für einen schreibenden Zugriff durch diesen Benutzer gesperrt. ' +
          'Die übergebenen Daten des UVZ-Eintrages können nicht gespeichert werden.', // UVZ-DE-007
        MULTIPLE_PENDING_CORRECTION_NOTES: 'Die Aktion konnte nicht ausgeführt werden. Bitte wiederholen Sie die Aktion. Sollte der Fehler bestehen bleiben, versuchen Sie es bitte zu einem späteren Zeitpunkt erneut.',

        // report handling
        REPORT_DEED_NOT_SUBMITTED: 'Für den gewählten Zeitraum ist mindestens ein UVZ-Eintrag vorhanden, der noch nicht eingetragen ist.', // UVZ-RE-001
        NO_RIGHT_FOR_STRICTLY_CONFIDENTIAL_DEED: 'In der Menge der gewählten UVZ-Einträge ist mindestens ein UVZ-Eintrag vorhanden, der als streng vertraulich markiert ist.', // UVZ-RE-002
        MAX_DEED_ENTRIES_EXCEEDED: 'Für den Berichtszeitraum wurden mehr Einträge ermittelt, als maximal exportiert werden dürfen.', // UVZ-RE-003

        // number management
        INVALID_FORMAT: 'Das Format der übergebenen UVZ-Nummer entspricht nicht dem definierten Format der UVZ-Nummer.', // UVZ-NM-002
        NUMBER_GAP: 'Sie haben eine erzeugte UVZ-Nummer überschrieben. Damit werden weitere UVZ-Nummern für die Erfassung übersprungen.', // UVZ-NM-004
        NUMBER_FORMAT_NOT_SET: 'Das Urkundenverzeichnis ist nicht konfiguriert. Bitte versuchen Sie es zu einem späteren Zeitpunkt.', // UVZ-NM-005

        // signature folder
        SIGNATURE_FOLDER_DUPLICATE_ENTRY: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.',
        SIGNATURE_FOLDER_CORRECTION_NOTE_NOT_FOUND: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.',
        SIGNATURE_FOLDER_ISSUING_COPY_NOTE_NOT_FOUND: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.',
        SIGNATURE_FOLDER_UNSUPPORTED_PROCESS_ACTION: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.',
        SIGNATURE_FOLDER_WRONG_STATE: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.',
        SIGNATURE_FOLDER_UNSUPPORTED_BUSINESS_OBJECT_TYPE: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.',
        SIGNATURE_FOLDER_DOCUMENT_META_DATA_NOT_FOUND: 'Die Rückgabe aus der Signaturmappe ist inkonsistent. Bitte wiederholen Sie den Vorgang.'
      },
      EnumFieldKey: {

        // parameter field keys - can be part of GENERIC_PARAMETER_TYPE or GENERIC_PARAMETER_MISSING
        PARAMETER_OFFICIAL_ACTIVITY_ID: 'Amtstätigkeits-ID',
        PARAMETER_ID: 'ID',
        PARAMETER_IDS: 'IDs', // list of ids...
        PARAMETER_UVZ_NUMBER: 'UVZ-Nummer',
        PARAMETER_ACTION: 'Aktion',
        PARAMETER_FROM_DATE: 'Datum von',
        PARAMETER_TO_DATE: 'Datum bis',
        PARAMETER_FROM_DATE_TO_DATE: 'Datum von bis',

        // deed entry handling
        DEED_ENTRY_ORIGIN_OFFICIAL_ACTIVITY_ID: 'Amstätigkeits-ID',
        DEED_ENTRY_OWNER_ORGANISATION_ID: 'Organisations-ID	',
        DEED_ENTRY_BUSINESS_PURPOSE: 'Geschäftsgegenstand',
        DEED_ENTRY_DEED_TYPE: 'Urkundentyp',
        DEED_ENTRY_DEPOSITED_INHERITANCE_CONTRACT: 'Verwahrter Erbvertrag',
        DEED_ENTRY_UVZ_NR: 'UVZ-Nr.',
        DEED_ENTRY_STATUS: 'Status',
        DEED_ENTRY_LOCATION: 'Ort',
        DEED_ENTRY_DEED_OF_PERSON: 'Urkundsperson',
        DEED_ENTRY_ADDON_BUSINESS_PURPOSE: 'Zusatz Geschäftsgegenstand',
        DEED_ENTRY_DEED_DATE: 'Datum des Amtsgeschäfts',
        DEED_ENTRY_REMARKS: 'Bemerkungen',
        DEED_ENTRY_PARTICIPANTS: 'Beteiligte',
        DEED_ENTRY_CORRECTION_NOTES: 'Korrekturvermerke',

        // remark handling
        REMARK_TEXT: 'Bemerkung',

        // correction note handling
        CORRECTION_NOTE_REMARK: 'Korrekturvermerks Bemerkung',

        // connection handling
        CONNECTION_ID: 'Verbindungs-ID',
        CONNECTION_UVZ_NR: 'Verbundene UVZ-Nr.',

        // deed participant handling
        DEED_ENTRY_PARTICIPANT_TYPE: 'Beteiligten-Typ',
        DEED_ENTRY_PARTICIPANT_FREE_DESCRIPTION: 'Freie Bezeichnung',

        // copy-note handling
        ISSUING_COPY_NOTE_PARTICIPANTS: 'Ausfertigungserteilung Empfänger',
        ISSUING_COPY_NOTE_CURRENT_NUMBER: 'Ausfertigungserteilung laufende Nummer',
        ISSUING_COPY_NOTE_ISSUE_DATE: 'Ausfertigungserteilung Datum',
        ISSUING_COPY_NOTE_FURTHER_ENFORCEABLE: 'Ausfertigungserteilung weitere vollstreckbare',
        ISSUING_COPY_NOTE_ENFORCEMENT_CANCELED_DATE: 'Ausfertigungserteilung Vollstreckungsklausel aufgehoben Datum',
        ISSUING_COPY_NOTE_REMARK: 'Ausfertigungserteilung Bemerkung',

        // copy-note participant handling
        ISSUING_COPY_NOTE_PARTICIPANT_TYPE: 'Ausfertigungserteilung Empfänger Typ',
        ISSUING_COPY_NOTE_PARTICIPANT_FREE_DESCRIPTION: 'Ausfertigungserteilung Empfänger Freie Bezeichnung',

        // registration handling
        REGISTRATION_REGISTER_TYPE: 'Registrierungs-Typ',
        REGISTRATION_TAX_OFFICE_TYPE: 'Finanzamtsstelle',
        REGISTRATION_REGISTER_NUMBER: 'Registernummer',
        REPORT_COUNT: 'Berichts-Zähler',

        // ooops...
        UNKNOWN_UNKNOWN: 'Unbekannt'

      },
      EnumRuleKey: {
        REQUIRED: 'Pflicht',
        MANDATORY_FIELD_VALUE_IS_NULL: 'Pflichtfeld nicht ausgefüllt',
        MANDATORY_FIELD_VALUE_IS_EMPTY: 'Pflichtfeld nicht ausgefüllt',
        FIELD_MUST_NOT_BE_PRESENT: 'Wert darf nicht gesetzt sein',
        INVALID_ELEMENT: 'Ungültiges Element',
        MISMATCH_CANNOT_BE_HANDLED: 'Ungültige Werte',
        TO_DATE_BEFORE_FROM_DATE: 'Ende der Zeitspanne darf nicht vor ihrem Anfang liegen',
        DATE_IN_FUTURE: 'Datum darf nicht in der Zukunft liegen',
        INVALID_NUMBER_TYPE: 'Ungültiger Zahlentyp',
        INVALID_NUMBER_LIST_TYPE: 'Ungültige Zahlen-Liste',
        INVALID_DATE_TYPE: 'Ungültiges Datum',
        INVALID_ACTION: 'Ungültige Aktion',
        FIELD_MUST_BE_FALSE: 'Feld muss Wert "Falsch" haben',
        FIELD_NOT_CHANGEABLE: 'Feldwert nicht änderbar',
        ILLEGAL_STATE: 'Unerlaubter Status',
        MAX_LENGTH_EXCEEDED: 'Wert zu lang',
        FORMAT_MISMATCH: 'Ungültiges Format',
        VALUE_NOT_UNIQUE: 'Wert nicht eindeutig',
        DATE_RANGE_EXCEEDED: 'Zeitspanne überschritten',

        // DEED ENTRY
        DEED_TYPE_DISABLE_ICN_DATA: 'Urkundenart erlaubt keine Ausfertigungserteilung',
        REQUIRED_REMARK_MISSING: 'Pflichtbemerkung fehlt',
        REQUIRED_PARTICIPANT_MISSING: 'Pflichtbeteiligter fehlt',


        // REPORT
        MAX_DEED_ENTRIES_EXCEEDED: 'Zu viele Einträge ausgewählt',

        // CONNECTION
        CONNECTION_NOT_DELETABLE: 'Der UVZ-Eintrag konnte nicht eingetragen werden, da die entfernte Verbindung  bereits in dem anderen Eintrag zum Entfernen vorgemerkt worden ist. Die Verbindung wurde wiederhergestellt.'
      }
    },
    busyIndicator: {
      altTextBusyIndicator: 'Das System bearbeitet ihre Anfrage'
    },
    miscellaneous: {
      remark: 'Hinweis',
      openSignature: 'Ausstehende Signaturen',
      issuingCopyNotes: 'Ausfertigungserteilung',
      'uvz-issuingcopynotes-delete': 'Ausfertigungserteilung löschen',
      'uvz-issuingcopynotes-question': 'Möchten Sie die folgende Ausfertigungserteilung wirklich löschen?',
      correctionNotes: 'Korrekturvermerk',
      internalNotes: 'Interne Notiz',
      further: 'weitere',
      uvzNumberNotAssignedMessage: 'UVZ Nummer nicht vergeben',
      'refusal-dialog-title': 'Zurückweisungsnotiz erfassen',
      'refusal-dialog-text':
        'Möchten Sie eine Zurückweisungsnotiz erfassen?',
      'refusal-dialog-radio-yes-with-note':
        'Ja, mit folgender Notiz:',
      'uvz-document-copy-note-refuse-alt':
        'Ausfertigungserteilung zurückweisen',
      'uvz-participants-delete':
        'Beteiligte entfernen',
      'uvz-participants-delete-question':
        'Möchten Sie folgenden Eintrag wirklich aus der Liste der Beteiligten löschen?',
      'uvz-issuingcopynotes-reject': 'Ausfertigungserteilung verwerfen',
      'uvz-issuingcopynotes-reject-question': 'Möchten Sie die folgende Ausfertigungserteilung wirklich verwerfen?',
      'uvz-correctionnotes-reject': 'Korrekturvermerk verwerfen',
      'uvz-correctionnotes-reject-question': 'Möchten Sie den folgenden Korrekturvermerk wirklich verwerfen?',
      'uvz-detailview-archivings-failed-title': 'Fehlgeschlagene Archivierungen'
    }
  },
  reports: {
    annualReport: {
      'uvz-view-year-end-closing-title': 'Jahresabschluss',
      'uvz-view-year-end-closing-date-range':
        'Kalenderjahr von/bis',
      'uvz-view-year-end-closing-notary': 'Notar/in',
      'uvz-view-year-end-closing-official-residence': 'Amtssitz',
      'uvz-view-year-end-closing-annual-overview':
        'Übersicht über Urkundsgeschäft',
      'uvz-annual-overview': 'Übersicht über Urkundsgeschäfte',
      'error-date-range':
        'Der gewählte Berichtszeitraum ist ungültig',
      'uvz-annual-overview-dialog-county-court-district':
        'Amtsgerichtsbezirk',
      'uvz-annual-overview-dialog-country-court': 'Landgericht',
      'uvz-annual-overview-dialog-sum-auth-and-res':
        '1. Summe aller Beurkundungen und Beschlüsse nach der Urkundenrolle:',
      'uvz-annual-overview-dialog-of-them': 'Davon:',
      'uvz-annual-overview-dialog-authentications':
        'a) Beglaubigungen von Unterschriften oder Handzeichen:',
      'uvz-annual-overview-dialog-authentications-with-draft':
        'aa) mit Anfertigung eines Urkundenentwurfs',
      'uvz-annual-overview-dialog-authentications-without-draft':
        'ab) ohne Anfertigung eines Urkundenentwurfs',
      'uvz-annual-overview-dialog-dispositions-of-death':
        'b) Verfügungen von Todes wegen',
      'uvz-annual-overview-dialog-mediations':
        'c) Vermittlungen von Auseinandersetzungen',
      'uvz-annual-overview-dialog-other-authentications':
        'd) Sonstige Beurkundungen und Beschlüsse',
      'uvz-annual-overview-dialog-certificates-of-notary':
        'davon Bescheinigungen des Notars:',
      'uvz-annual-overview-dialog-protests':
        '2. Wechsel- und Scheckproteste:',
      'uvz-annual-overview-dialog-together': '3. Zusammen:',
      'error-message-change-selection-criteria-text': 'Sie können einen anderen Zeitraum wählen oder das Erstellen abbrechen.',
      'modal-dialog-title-error-message': 'Fehlermeldung',
      'error-message-no-submitted-entries-text': 'Für den gewählten Zeitraum ist mindestens ein UVZ-Eintrag vorhanden, der noch nicht eingetragen ist.',
      'error-message-confidential-entries-text': 'In der Menge der gewählten UVZ-Einträge ist mindestens ein UVZ-Eintrag vorhanden, der als streng vertraulich markiert ist.',
      'error-message-too-many-entries': 'Für den Berichtszeitraum wurden mehr Einträge ermittelt, als maximal exportiert werden dürfen.',
      pdf: {
        'uvz-annual-overview-pdf-header':
          'An die/den\n' +
          'Frau Präsidentin/Herrn Präsidenten des Landgerichts \n' +
          'in {{countryCourt}}',
        'uvz-annual-overview-pdf-overview': 'Übersicht',
        'uvz-annual-overview-pdf-overview-of': 'über',
        'uvz-annual-overview-pdf-business-of-notary':
          'Urkundsgeschäfte der Notarin/des Notars',
        'uvz-annual-overview-pdf-court-district':
          'Amtsgerichtsbezirk ...',
        'uvz-annual-overview-pdf-residence': 'Amtssitz ...',
        'uvz-annual-overview-pdf-calendar-year':
          'im Kalenderjahr ...',
        'uvz-annual-overview-pdf-from-to-date':
          'in der Zeit vom {{fromDate}} bis {{toDate}} *)',
        'uvz-annual-overview-pdf-signed-by':
          'Die Richtigkeit bescheinigt',
        'uvz-annual-overview-pdf-sign-space':
          '____________________, den_________________________\n' +
          '\n' +
          '__________________________________________________',
        'uvz-annual-overview-pdf-notary-placeholder':
          'Notarin/Notar',
        'uvz-annual-overview-pdf-foot-note':
          '\t*) Nur ausfüllen, falls die Notarin/der Notar nicht während des ganzen Kalenderjahres im Amte war.\n' +
          '**) einschließlich der in die Urkundenrolle eingetragenen Beurkundungen und Beschlüsse nach dem \n' +
          'Sachenrechtsbereinigungsgesetz (§ 8 Abs. 1 Nr. 7, § 24 Abs. 2 Nr. 3 DONot).\n' +
          '***) einschließlich der Vollstreckbarerklärungen nach § 796 c Abs. 1, § 1053 Abs. 4 ZPO.'
      }
    },
    annualDeedRegisterReport: {
      'uvz-export-time-interval': 'Übersichtszeitraum:',
      'notary-name-in-location-with-academic-title': '{{academicTitle}} {{firstName}} {{lastName}} in {{location}}',
      'uvz-annual-export-dialog-uvzno': 'UVZ-Nr.',
      'uvz-annual-export-dialog-date': 'Datum',
      'uvz-annual-export-dialog-location': 'Ort',
      'uvz-annual-export-dialog-uvz-date-location': 'UVZ-Nr. Datum Ort',
      'uvz-annual-export-dialog-deed-of-person': 'Urkundsperson',
      'uvz-annual-export-dialog-participants': 'Beteiligte',
      'uvz-annual-export-dialog-deedpurpose-type': 'Gegenstand des Geschäfts (Art der Urkunde)',
      'uvz-annual-export-dialog-issuingcopynotes': 'Erteilung von Ausfertigungen',
      'uvz-annual-export-dialog-remarks': 'Bemerkungen',
      'uvz-annual-export-dialog-registrations': 'Anzeigen / Registrierungen',
      'uvz-annual-export-dialog-connections': 'Verbindungen',
      'uvz-annual-export-dialog-correction-notes': 'Vermerke',
      'uvz-view-year-end-closing-annual-export': 'Jahresexport - Urkundenverzeichnis',
      'uvz-view-year-end-closing-annual-export-additions': 'zzgl. Änderungen',
      'uvz-view-year-end-closing-annual-export-filename': 'UVZ Jahresexport',
      'uvz-view-year-end-closing-annual-export-filename-additions': '_Änderungen',
      'uvz-annual-export-dialog-entries': 'UVZ-Einträge',
      'uvz-annual-export-dialog-changed-entries': 'Geänderte UVZ-Einträge ({{year}})',
      'time-range-from': 'vom {{fromDate}}',
      'time-range-to': 'bis {{toDate}}',
      'issue-copy-note-date-and-receiver': 'Ausfertigung am {{date}} an {{receiver}}',
      'correction-note-removal': '{{dataField}} unter {{context}} entfernt.',
      'correction-note-addition': '{{dataField}} unter {{context}} hinzugefügt.',
      'correction-note-change-value-fields': '{{dataField}} unter {{context}} geändert von {{oldValue}} nach {{newValue}}.',
      'correction-note-change-check-checkbox': '{{dataField}} unter {{context}} geändert von deselektiert zu selektiert.',
      'correction-note-change-uncheck-checkbox': '{{dataField}} unter {{context}} geändert von selektiert zu deselektiert.',
      'uvz-index-card-correction-notes-confirmation-note-no-res': '(bestätigt am {{signatureDate}} durch {{signingUser}})',
      'ztr-register-number': 'ZTR-Nr. {{registerNumber}}',
      'zvr-register-number': 'ZVR-Nr. {{registerNumber}}',
      'connections-uvz-number': 'UVZ-Nr. {{uvzNumber}}',
      'connections-vvz-number': 'Masse-Nr. {{vvzNumber}}',
      'authentication-of-signatures-with-preparation': 'Unterschriftsbeglaubigung m. Entwurf',
      'authentication-of-signatures-without-preparation': 'Unterschriftsbeglaubigung o. Entwurf'
    },
    depositedInheritanceContracts: {
      'uvz-view-year-end-closing-annual-inheritance': 'Übersicht verwahrter Erbverträge',
      'uvz-export-time-interval': 'Übersichtszeitraum:',
      'time-range-from': 'vom {{fromDate}}',
      'time-range-to': 'bis {{toDate}}',
      'connections-uvz-number': 'UVZ-Nr. {{uvzNumber}}',
      'uvz-inheritance-report-dialog-uvzno': 'UVZ-Nr.',
      'uvz-inheritance-report-dialog-date': 'Datum',
      'uvz-inheritance-report-dialog-deedperson': 'Urkundsperson',
      'uvz-inheritance-report-dialog-participants': 'Beteiligte',
      'uvz-inheritance-report-dialog-connections': 'Verbindungen',
      'uvz-inheritance-report--dialog-remarks': 'Bemerkungen',
      'uvz-inheritance-report-dialog-registrations': 'Anzeigen / Registrierungen'
    },
    exportDialog: {
      'export-dialog-title': '{{reportTitle}} exportieren',
      'export-dialog-text': 'Wie möchten Sie verfahren?',
      'export-dialog-radio-open': 'Den Export zur Ansicht öffnen.',
      'export-dialog-radio-save': 'Den Export lokal speichern.',
      'export-dialog-radio-datenblatt': 'Datenblatt',
      'export-dialog-radio-vermerkblatt': 'Vermerkblatt',
      'export-dialog-target-name': 'Dateiname:'
    },
    participantsReport: {
      'uvz-participants-report-dialog-name': 'Name / Bezeichnung',
      'uvz-participants-report-dialog-domicile': 'Wohnort / Sitz',
      'uvz-participants-report-dialog-birthdate': 'Geburtsdatum',
      'uvz-participants-report-dialog-details': 'Details',
      'uvz-participants-report-dialog-uvzno': 'UVZ-Nr.',
      'uvz-view-year-end-closing-annual-name-report': 'Übersicht über Beteiligte',
      'participants-report-id-number': 'Identifikationsnummer',
      'participants-report-economic-id-number': 'Wirtschaftsidentifikationsnummer',
      'participants-report-vat-id-number': 'Umsatzsteueridentifikationsnummer',
      'uvz_beteiligte': 'UVZ Beteiligte'
    },
  },
  successors: {
    'uvz-partial-successor-selection-dropdown-placeholder': 'Bitte Verwahrer auswählen',
    'uvz-partial-successor-placeholder': 'Neuer Verwahrer',
    'uvz-permanent-successor-title': 'Urkundenverzeichnis - Verwahrung (§51, §58 BNotO) übergeben',
    'uvz-temporary-successor-title': 'Urkundenverzeichnis - Verwahrung (§45 BNotO) übergeben',
    'permanent-successor-demand': 'Vorgabe:',
    'navigation-permanent-successor': 'Verwahrung (§51, §58 BNotO) übergeben',
    'navigation-temporary-successor': 'Verwahrung (§45 BNotO) übergeben',
    'permanent-successor-modal-dialog-description': 'Alle UVZ-Einträge werden dauerhaft in das Urkundenverzeichnis des/der ausgewählten Nachfolgers/Nachfolgerin übergeben. Möchten Sie die Übergabe durchführen?',
    'selection-with-index': '{{index}}. Auswahl:',
    'button-ok': 'OK',
    'permanent-successor-assign': 'Zuordnen',
    'button-cancel': 'Abbrechen',
    'button-search': 'Suchen',
    'button-new-search': 'Neue Suche',
    'button-assign': 'Einträge zuordnen',
    'handover-modal-title-prefix': 'Übergabe an',
    'header-count': '{{totalDepositCount}} von {{totalCount}} Einträgen zugeordnet',
    'time-range-from': 'vom {{fromDate}}',
    'time-range-to': 'bis {{toDate}}',
    'uvz-searchcriteria-date': 'Ausstellungsdatum',
    'uvz-searchcriteria-from': 'von',
    'uvz-searchcriteria-to': 'bis',
    'uvz-searchcriteria-deed-kind': 'Urkundenart',
    'uvz-searchcriteria-status': 'Status',
    'permanent-succesor-total-stock': 'Gesamtbestand',
    'permanent-succesor-partial-stock': 'Teilbestand',
    'modal-select-successor-mode-5158-name': 'Verwahrungsübergabe (§51, §58 BNotO)',
    'modal-select-successor-mode-45-name': 'Verwahrungsübergabe (§45 BNotO)',
    'modal-select-successor-mode-5158-text': 'siehe Onlinehilfe',
    'modal-select-successor-mode-45-text': 'siehe Onlinehilfe',
    'title-modal-select-successor-mode': 'Urkundenverzeichnis - Amtsübergabe',
    'navigation-select-successor-mode': 'Amtsübergabe',
    'successor-connections-title': 'Fehler: Bestehende Verbindungen',
    'successor-connections-text1': 'Die Übergabe kann nicht durchgeführt werden, da zwischen folgenden Einträgen Verbindungen bestehen:',
    'successor-connections-head1': 'UVZ-Nr., Amtstätigkeit',
    'successor-connections-head2': 'Verbindung, Amtstätigkeit',
    'successor-connections-text2': 'Bitte lösen Sie zunächst diese Verbindungen. Erst dann kann eine Übergabe stattfinden.',
    'successor-more-connections-text': 'Insgesamt {{totalCount}} blockierende Verbindungen. Bitte exportieren Sie die Liste.',
    'successor-more': 'und Weitere'
  },
  enhancedSearch: {
    'uvz-searchcriteria-uvzNr': 'UVZ-Nr',
    'uvz-searchcriteria-number-not-assigned': 'UVZ-Nr. nicht vergeben',
    'uvz-searchcriteria-deposited-contract': 'Verwahrter Erbvertrag',
    'uvz-searchcriteria-date': 'Ausstellungsdatum',
    'uvz-searchcriteria-from': 'von',
    'uvz-searchcriteria-to': 'bis',
    'uvz-searchcriteria-deed-kind': 'Urkundenart',
    'uvz-searchcriteria-status': 'Status',
    'uvz-searchcriteria-confidential': 'Streng vertraulich',
    'uvz-searchcriteria-publicarchives': 'relevant für öffentliche Archive',
    'uvz-searchcriteria-participants': 'Beteiligte',
    'uvz-searchcriteria-business-purpose': 'Geschäftsgegenstand',
    'uvz-searchcriteria-deedPerson': 'Urkundsperson',
    'uvz-searchcriteria-all': 'alle',
    'uvz-searchcriteria-deedPerson-officer-holder': 'Amtsinhaber/in',
    'uvz-searchcriteria-deedPerson-representative': 'Notarvertreter/in',
    'uvz-searchcriteria-location': 'Ort des Amtsgeschäfts',
    'uvz-searchcriteria-location-business': 'Geschäftsstelle',
    'uvz-searchcriteria-location-outside': 'außerhalb'
  },
  officialActivityFilter: {
    select_official_activity_label: 'Amtstätigkeit (AT)',
    select_official_activity_radio_current_at: 'Aktuelle AT',
    select_official_activity_radio_deposited_at: 'Verwahrte AT',
    select_official_activity_radio_all_at: 'alle',
    select_official_activity_inputfield_text:
      'Nachname, Vorname, Amtssitz, Amtstitel'
  },
  deedOverviewHomePage: {
    title: 'Urkundenverzeichnis',
    search: {},
    radio: {
      'radio-decision-yes': 'Ja',
      'radio-decision-no': 'Nein'
    },
    warnings: {
      maxTabLimit: `Es können maximal {{maxTabLimit}} Einträge gleichzeitig geöffnet werden`
    },
    errors: {
      'error-limit-reached': 'Es kann maximal {{MaxConfigurableNumberOfReadOnlyViewsInExport}} Eintrag exportiert werden. Bitte schränken Sie Ihre Auswahl ein.'
    },
    overview: {
      columns: {
        uvzNumber: 'UVZ-Nr.',
        date: 'Datum',
        businessPurpose: 'Geschäftsgegenstand',
        participants: 'Beteiligte',
        representation: 'Vertretung',
        location: 'Ort',
        status: 'Status',
        deedOfPerson: 'Urkundsperson',
        deedType: 'Urkundenart',
        changedByUser: 'Zuletzt bearbeitet von',
        changedTimeStamp: 'Letzte Bearbeitung',
        relevantForPublicArchives:
          'Relevant für öffentliche Archive',
        depositedInhertedContract: 'Verwahrte Erbverträge',
        strictlyConfidential: 'Streng vertraulich',
        corrected: 'Korrigiert',
        officialActivityName: 'Amtstätigkeit',
        time: 'Uhrzeit',
        change: 'Änderung',
        verifyConnectionModalHeader1: 'UVZ-Nr, Amtstätigkeit',
        verifyConnectionModalHeader2: 'Verbindungen, Amtstätigkeit',
        verifyConnectionPdfTitle: 'Fehler: Bestehende Verbindungen'
      },
      modal: {
        'uvz-number-format-title': 'Nummernformat einstellen',
        'uvz-number-format-instruction': 'Sie müssen vor der Nutzung des Urkundenverzeichnisses das von Ihnen verwendete UVZ-Nummernformat einstellen. Bitte wählen Sie ein Format aus:',
        'uvz-valuelist-number-format-1': '1/2020',
        'uvz-valuelist-number-format-2': '2020/1',
        'uvz-valuelist-number-format-3': '1/A/2020',
        'uvz-valuelist-number-format-4': '1/2020/A',
        'uvz-valuelist-number-format-5': '2020/1/A',
        'uvz-valuelist-number-format-6': '2020/A/1',
        'uvz-valuelist-number-format-7': 'A/1/2020',
        'uvz-valuelist-number-format-8': 'A/2020/1',
        'uvz-mark-number-format': 'Kennzeichen:',
        'uvz-delimeter1-number-format': 'Trennzeichen 1:',
        'uvz-delimeter2-number-format': 'Trennzeichen 2:',
        'uvz-formatted-number': 'Vorschau:'


      }
    },
    uvzLockForEditMissingDialog: {
      title: 'Eintrag {{uvzNumber}} gesperrt',
      content: 'Der UVZ-Eintrag ist bereits für den exklusiven Zugriff durch einen anderen Benutzer gesperrt: {{lockOwner}} {{lockDate}}.' + '\n' +
        '\n' +
        'Möchten Sie diese Sperre aufheben? (Achtung: Dadurch gehen alle Änderungen des bisherigen Inhabers dieser Sperre verloren!)'
    }
  },
  deedViewPage: {
    'uvz-open-heading': 'UVZ-Eintrag {{UVZNumber}}',
    'uvz-open-section-header-basic': 'Grunddaten',
    'uvz-open-section-header-participant': 'Beteiligte',
    'uvz-open-section-header-issuingcopynotes': 'Ausfertigungen',
    'uvz-open-section-header-remark': 'Bemerkungen',
    'uvz-open-section-header-connections': 'Verbindungen',
    'uvz-open-section-header-registrations': 'Anzeigen / Registrierungen',
    'uvz-open-section-header-correctionnotes': 'Änderungsvermerke',
    'uvz-open-section-header-documents': 'Dokumente',
    'uvz-open-section-connections-deeds': 'Verbundene UVZ-Einträge',
    'uvz-open-section-connections-aocs': 'Verbundene Verwahrungen',
    'uvz-open-section-connections-number': 'UVZ-Nr',
    'uvz-open-section-connections-aocs-number': 'Massenummer',
    'uvz-open-section-basic-date': 'Datum des Amtsgeschäfts:',
    'uvz-open-section-basic-business-purpose': 'Geschäftsgegenstand:',
    'uvz-open-section-basic-deed-type': 'Urkundenart:',
    'uvz-open-section-basic-deed-person': 'Urkundsperson:',
    'uvz-open-section-basic-location': 'Ort:',
  },
  businessLoggingPage: {
    'uvz-protocol-heading': 'Protokoll UVZ {{UVZNumber}}',
    'protocol-export-dialog-warning-title': 'Achtung',
    'protocol-export-dialog-warning-message': 'Es werden nur die aktuellsten 30000 Einträge exportiert.',
    'protocol-report-export': 'Protokoll UVZ',
    'datasheet-report-export': 'UVZ {{UVZNumber}} Datenblatt',
    'notesheet-report-export': 'UVZ {{UVZNumber}} Vermerkblatt',
    'uvz-overview-table-export-title': 'UVZ Übersicht'
  },
  deedFormPage: {
    'uvz-create-title': 'Neuer UVZ-Eintrag',
    'uvz-create-edit-entry-basic-data-title':
      'UVZ-Eintrag {{UVZNumber}}',
    'uvz-create-edit-entry-basic-data-cardtitle': 'Grunddaten',
    'uvz-create-edit-entry-participants-cardtitle': 'Beteiligte',
    'uvz-create-edit-entry-issuing-copy-notes-cardtitle':
      'Ausfertigungen',
    'uvz-create-edit-entry-remarks-cardtitle': 'Bemerkungen',
    'uvz-create-edit-entry-notes-cardtitle': 'Vermerke',
    'uvz-create-edit-links-cardtitle': 'Verbindungen',
    'uvz-create-edit-entry-registrations-cardtitle':
      'Anzeigen/Registrierungen',
    'alt-text-checkbox-notchecked': 'auswählen',
    'alt-text-checkbox-checked': 'abwählen',
    'uvz-create-edit-location-defaultvalue': 'Geschäftsstelle'
  },
  details: {
    title: 'UVZ Eintrag',
    tabs: {
      common: {
        'button-collapse-all': 'Alle einklappen'
      },
      basicData: {
        title: 'Grunddaten',
        officialActivity: 'Amtstätigkeit',
        'uvz-basic-data-number': 'UVZ-Nr.',
        'uvz-basic-data-checkbox-number-not-assigned':
          'UVZ-Nr. nicht vergeben',
        'uvz-basic-data-date': 'Datum des Amtsgeschäfts',
        'uvz-basic-data-deed-person': 'Urkundsperson',
        'uvz-basic-data-checkbox-representative':
          'Notarvertretung',
        'uvz-basic-data-location': 'Ort',
        'uvz-basic-data-objective': 'Geschäftsgegenstand',
        'uvz-basic-data-additional-objective':
          'Zusatz Geschäftsgegenstand',
        'uvz-basic-data-deed-type': 'Urkundenart',
        'uvz-basic-data-checkbox-deposited-contract':
          'Verwahrter Erbvertrag',
        'uvz-basic-data-checkbox-public-archives':
          'relevant für öffentliche Archive',
        'uvz-basic-data-checkbox-confidential':
          'Streng vertraulich',
        'error-message-no-representation-title':
          'Keine Notarvertretung vorhanden.',
        'error-message-no-representation-text':
          'Bitte erfassen Sie zunächst die Notarvertretung in der Notarvertreterverwaltung.',
        'modal-dialog-title-error-message': 'Fehlermeldung',
        'uvz-capture-pack-error-number-already-used':
          'Die eingegebene UVZ-Nummer ist bereits für einen anderen UVZ-Eintrag belegt oder das Format beziehungsweise Jahr ist nicht richtig. Sie können die Erfassung des UVZ-Eintrages mit folgender UVZ-Nummer fortsetzen.',
        'modal-dialog-title-warning-message': 'Warnung',
        'uvz-create-warning-overwritten-number':
          'Sie haben eine erzeugte UVZ-Nummer überschrieben. Damit werden weitere UVZ-Nummern für die Erfassung übersprungen. Möchten Sie fortsetzen?',
        'uvz-issue-copy-note-deletion-warning':
          'Die gewählte Urkundenart gestattet keine Ausfertigungserteilungen. Alle Ausfertigungserteilungen werden entfernt. Möchten Sie fortfahren?',
        'uvz-change-deed-type': 'Urkundenart ändern'
      },
      participant: {
        'uvz-participants-add-button': 'Beteiligte hinzufügen',
        'button-collaps-all': 'Alle einklappen',
        'uvz-participants-new': 'Neuer Eintrag',
        'uvz-participants-number': 'Anzahl der Personen:',
        'uvz-participants-description': 'Bezeichnung:',
        'uvz-participants-description-placeholder':
          'Freie Bezeichnung eingeben',
        'uvz-participants-representative': 'Vertreter/in',
        'uvz-participants-represented': 'Vertretene/r',
        altTexts: {
          'icon-pencil-alt-text': 'Bearbeiten',
          'icon-trash-alt-text': 'Entfernen',
          'icon-accordion-open-alt-text': 'Eintrag aufklappen',
          'icon-accordion-close-alt-text': 'Eintrag einklappen',

          'alt-text-checkbox-notchecked': 'auswählen',
          'alt-text-checkbox-checked': 'abwählen'
        },
        errors: {
          'error-missing-participant':
            'Sie müssen mindestens einen Beteiligten hinzufügen, um eintragen zu können.'
        }
      },
      remark: {
        'uvz-comments-add-button': 'Bemerkung hinzufügen',
        'uvz-comments-remark': 'Bemerkung',
        'uvz-comments-creation-date': 'Datum',
        'uvz-comments-checkbox-removable': 'Löschbar',
        'uvz-comments-delete-remark-title': 'Bemerkung löschen',
        'uvz-comments-delete-remark-message': 'Möchten Sie den Eintrag wirklich aus der Liste der Bemerkungen löschen?'
      },
      connections: {
        'uvz-connections-uvz-connect-title': 'UVZ-Verbindungen',
        'uvz-connections-uvz-connect-add-button':
          'UVZ-Verbindung hinzufügen',
        'uvz-connections-vvz-connect-title': 'VVZ-Verbindungen',
        'uvz-connections-delete':
          'Verbindung zu UVZ {{UVZNumber}} löschen',
        'uvz-connections-number': 'UVZ-Nr',
        'uvz-connections-id': 'Id'
      },
      registrations: {
        'uvz-comments-add-button':
          'Finanzamtanzeige/Registrierung hinzufügen',
        'uvz-open-section-registrations-tax': 'Finanzamtanzeige',
        'uvz-open-section-registrations-ztr': 'ZTR',
        'uvz-open-section-registrations-zvr': 'ZVR',
        'uvz-registrations-type': 'Registertyp',
        'uvz-registrations-date': 'Datum:',
        'uvz-open-section-registrations-tax-location': 'Stelle:',
        'uvz-open-section-registrations-ztr-zvr-register': 'Registernummer:',
        landTransfer: 'Grunderwerbsteuerstelle',
        corporation: 'Körperschaftsteuerstelle',
        inheritanceAndGift:
          'Erbschaft- und Schenkungsteuerstelle',
        title: 'Anzeigen/Registrierungen',
        deleteModalTitle: 'Anzeige/Registrierung löschen',
        deleteModalDescription: 'Möchten Sie den Eintrag wirklich aus der Liste der Anzeigen/Registrierungen löschen?'
      },
      issuingCopyNotes: {
        'uvz-issuingcopynotes-add-button':
          'Ausfertigungserteilung hinzufügen',
        'uvz-issuingcopynotes-receiver-add-button':
          'Empfänger/in hinzufügen',
        'uvz-issuingcopynotes-number': 'Laufende Nummer',
        'uvz-issuingcopynotes-date': 'Datum',
        'uvz-issuingcopynotes-remark': ' Bemerkung',
        'uvz-issuingcopynotes-enforce': 'vollstreckbar',
        'uvz-issuingcopynotes-extracts': 'auszugsweise',
        'uvz-issuingcopynotes-other-enforce':
          'weitere vollstreckbare',
        'uvz-issuingcopynotes-enforcement-canceled':
          'Vollstreckungsklausel aufgehoben',
        'uvz-issuingcopynotes-status': 'Status',
        'uvz-issuingcopynotes-receiver': 'Empfänger/in',
        'uvz-issuingcopynotes-further-receiver':
          'Weitere/r Empfänger/in',
        'uvz-issuingcopynotes-new-text':
          'Neue Ausfertigungserteilung',
        'uvz-issuingcopynotes-title-text':
          '{{currentNumber}}.  Ausfertigungserteilung',
        'uvz-issuingcopynotes-refusal-note': 'Zurückweisungsnotiz'
      },
      altTexts: {
        'icon-trash-alt-text': 'Entfernen',
        'icon-accordion-open-alt-text': 'Eintrag aufklappen',
        'icon-accordion-close-alt-text': 'Eintrag einklappen'
      },
      correctionNotes: {
        correctionnotice: 'Korrekturvermerk',
        action: 'Aktion',
        context: 'Karteikarte',
        field: 'Datenfeld',
        originalValue: 'Alter Wert',
        newValue: 'Neuer Wert',
        remark: 'Grund',
        refusalNote: 'Notiz',
        acknowledgement:
          'Bestätigt am {{signature_date}} durch {{role}} {{signerDisplayName}} in {{residence}}',
        acknowledgementNoResidence:
          'Bestätigt am {{signature_date}} durch {{role}} {{signerDisplayName}}',
        correctionNoteDialogTitle: 'Korrekturvermerk für UVZ-Eintrag',
        correctionNoteLabelTitle: 'Geänderte Datenfelder:',
        reasonTextCorrectionNoteSubmit:
          'Änderungen an durch Signatur bestätigten UVZ-Einträgen erfordern einen Korrekturvermerk. <br/> Bitte geben Sie einen Grund für die Korrektur des UVZ-Eintrages ein:',
        signImmediatelyQuestionLabel: 'Der Korrekturvermerk muss durch Signatur bestätigt werden. Möchten Sie im Anschluss signieren?',
        enumAction: {
          DELETED: 'Gelöscht',
          CHANGED: 'Geändert',
          CREATED: 'Hinzugefügt'
        },
        enumStatus: {
          TO_BE_SIGNED: 'Zu Signieren',
          SIGNED: 'Bestätigt am ',
          REFUSED: 'Zurückgewiesen'
        },
        'uvz-correctionnote-removed-list-entry':
          'Es wurde mindestens ein Eintrag entfernt.',
        'uvz-correctionnote-added-list-particpant':
          'Es wurde mindestens ein Beteiligter hinzugefügt.'
      },
      displayAndRegistrations: {
        title: 'Anzeigen/Registrierungen',
        taxOffice: 'Stelle',
        registerNumber: 'Registernummer',
        enum: {
          'uvz-open-section-registrations-tax':
            'Finanzamtanzeige',
          ZTR: 'ZTR',
          ZVR: 'ZVR'
        }
      },
      participantView: {
        name: 'Name:',
        birthName: 'Geburtsname:',
        domicile: 'Wohnort:',
        birthDate: 'Geburtsdatum:',
        description: 'Bezeichnung:',
        residence: 'Sitz:',
        number: 'Anzahl der Personen:',
        representative: 'Vertreter/in',
        represented: 'Vertretene/r'
      },
      copyNotesView: {
        receiver: 'Empfänger/in:',
        furtherReceiver: 'weitere Empfänger/in:',
        currentNumber: 'laufende Nummer:',
        date: 'Datum:',
        remark: 'Bemerkung:',
        enforcableCheck: 'vollstreckbar',
        extractsCheck: 'auszugsweise',
        furtherEnforcableCheck: 'weitere vollstreckbare',
        enforcementCanceled: 'Vollstreckungsklausel aufgehoben:',
        copyGrant: 'Ausfertigungserteilung',
        enumStatus: {
          TO_BE_SIGNED: 'Zu Signieren',
          IN_PREPARATION: 'In Vorbereitung',
          SIGNED: 'Bestätigt am ',
          REFUSED: 'Zurückgewiesen'
        }
      },
      deedNotAssigned: {
        'uvz-modal-dialog-entry-not-assigned-text':
          'Sie sind dabei, den Verzeichniseintrag als nicht vergeben zu kennzeichnen. Alle Daten werden entfernt. Möchten Sie fortfahren?',
        'uvz-modal-dialog-entry-not-assigned-title':
          'Eintrag nicht vergeben',
        'uvz-deed-not-assigned-title':
          'UVZ-Nr als "Nicht vergeben " markieren',
        'uvz-deed-not-assigned-text':
          'Bitte geben Sie eine Bemerkung ein, wenn Sie die UVZ-Nr. als nicht vergeben eintragen wollen.',
        'uvz-overview-column-nr': 'UVZ-Nr.',
        'uvz-deed-not-assigned-remark': 'Bemerkung *',
        'uvz-button-cancel': 'Abbrechen',
        'button-ok': 'OK'
      },
      enums: {
        EnumTaxIdType: {
          ID_NUMBER: 'Identifikationsnummer:',
          ECONOMIC_ID_NUMBER:
            'Wirtschafts-Identifikationsnummer:',
          VAT_ID_NUMBER: 'Umsatzsteuer-Identifikationsnummer:'
        }
      }
    }
  },
  exports: {
    'quicksearch-criteria-key': 'Schnellsuche=',
    'official-activity-filter-all': 'alle',
    'official-activity-not-set-for-chamber': '-',
    'error-no-entries': 'Es sind keine Einträge für den Export vorhanden. Bitte passen Sie Ihre Suche an.',
    'error-limit-reached': 'Es können maximal {{limit}} Einträge exportiert werden. Bitte schränken Sie Ihre Suche ein.',
    'error-export-created': 'Export mit mehr als {{amountOfEntries}} Einträgen wird erstellt. Bitte haben Sie Geduld.',
    'notary-name-in-location': '{{firstName}} {{lastName}} in {{location}}',
    'boolean-to-locale-true': 'Ja',
    'boolean-to-locale-false': 'Nein',
    'notary': 'Notar/in:',
    'active-filters': 'Aktive Filter:',
    'export-date': 'Exportdatum:',
    'export-status': 'Status:',
    'export-name': 'Notar/in:',
    'advance-filters': 'Übersichtszeitrum:',
    'advancesearch-criteria-toDate': 'bis=',
    'advancesearch-criteria-fromDate': 'von=',
    'advancesearch-criteria-deedType': 'Urkundenart:',
    'advancesearch-criteria-status': 'Status:',
    'advancesearch-criteria-uvzNumber': 'UVZ-Nr.',
    'advancesearch-criteria-uvzNumberNotAssigned': 'UVZ Nummer nicht vergeben:',
    'advancesearch-criteria-depositedInheritance': 'Verwahrte Erbverträge:',
    'advancesearch-criteria-strictlyConfidential': 'Streng vertraulich:',
    'advancesearch-criteria-relevantForPublicArchivess': 'Relevant für öffentliche Archive:',
    'advancesearch-criteria-deedOfPerson': 'Urkundsperson:',
    'advancesearch-criteria-location': 'Ort:',
    'advancesearch-criteria-participant': 'Beteiligte:',
    'advancesearch-criteria-businessPurpose': 'Geschäftsgegenstand:',

    metaData: {
      'uvzNrLabel': 'UVZ-Nr. {{uvzNr}}'
    }
  },
  onlineHelp: {
    'uvz-online-help-tab-register-overview-alt-text': 'Onlinehilfe für die Übersichtsseite im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-alt-text': 'Onlinehilfe für das Erstellen und Bearbeiten von UVZ Einträgen im Browser öffnen',
    'uvz-online-help-tab-reading-view-alt-text': 'Onlinehilfe für das Einsehen von UVZ Einträgen im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-basic-data-alt-text': 'Onlinehilfe für die Karteikarte Grunddaten im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-participants-alt-text': 'Onlinehilfe für die Karteikarte Beteiligte im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-issuing-copy-notes-alt-text': 'Onlinehilfe für die Karteikarte Ausfertigungen im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-remarks-alt-text': 'Onlinehilfe für die Karteikarte Bemerkungen im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-notes-alt-text': 'Onlinehilfe für die Karteikarte Vermerke im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-links-alt-text': 'Onlinehilfe für die Karteikarte Verbindungen im Browser öffnen',
    'uvz-online-help-tab-create-edit-view-registrations-alt-text': 'Onlinehilfe für die Karteikarte Anzeigen/Registrierungen im Browser öffnen',
    'uvz-online-help-tab-configuration-alt-text': 'Onlinehilfe für die Konfiguration des UVZ im Browser öffnen',
    'uvz-online-help-tab-uvz-connection-alt-text': 'Online Hilfe'
  },
  usl: {
    general: {
      'uvz-documents-doctype-not-set': 'Bitte auswählen...'
    },
    document: {
      'uvz-document-text': 'Dokumententitel',
      'uvz-document-tab-text': 'Dokumente',
      'uvz-document-type': 'Dokumententyp',
      'uvz-document-change': 'Vermerk',
      'uvz-document-signature': 'Signatur',
      'uvz-document-status': 'Status',
      'uvz-document-tile-1': 'Adoptionsantrag_Traumfabrik',
      'uvz-document-tile-2': 'Ergänzungen_Antrag_Traumfabrik',
      'uvz-document-tile-3': 'Zeugnis',
      'uvz-document-tile-4': 'Ergänzung_Anhang_A',
      'uvz-document-missing': 'fehlt',
      'uvz-document-empty-no-error': 'vorhanden',
      'uvz-document-empty-has-eror': 'fehlerhaft',
      'uvz-create-edit-entry-documents-other-document-title': 'Sonstige Dokumente',
      'uvz-create-edit-entry-documents-main-document-title': 'Hauptdokument',
      'uvz-documents-add-document-button': 'Dokument hinzufügen +',
      'uvz-documents-default-refusal-note': 'Keine Zurückweisungsnotiz hinterlegt'
    },
    EnumDocumentStatus: {
      'uvz-documents-docstatus-in-preparation': 'In Vorbereitung',
      'uvz-documents-docstatus-in-to-be-signed': 'Zu signieren',
      'uvz-documents-docstatus-refused': 'zurückgewiesen',
      'uvz-documents-docstatus-archiving': 'Wird archiviert',
      'uvz-documents-docstatus-archiving-failed': 'Archivierung fehlgeschlagen',
      'uvz-documents-docstatus-archived': 'Archiviert',
      'uvz-documents-docstatus-flagged-for-deletion': 'Zur Löschung vorgesehen'
    },
    EnumDocumentType: {
      'uvz-documents-doctype-el-version-of-original': 'Elektronische Fassung der Urschrift',
      'uvz-documents-doctype-el-original': 'Elektronisches Original',
      'uvz-documents-doctype-el-ver-notarised-transcript': 'Elektronische Fassung der begl. Abschrift',
      'uvz-documents-doctype-el-transcript-basic': 'Elektronische Abschrift (einfach)',
      'uvz-documents-doctype-other-paper-doc': 'Sonstiges Papierdokument',
      'uvz-documents-doctype-el-transcript-notarised': 'Elektronische Abschrift (beglaubigt)',
      'uvz-documents-doctype-fair-copy': 'Reinschrift',
      'uvz-documents-doctype-el-endorsement': 'Elektronischer Vermerk nach § 44a / § 44b BeurkG',
      'uvz-documents-doctype-paper-endorsement': 'Papier-Vermerk nach § 44a / § 44b BeurkG',
      'uvz-documents-doctype-other-el-notarial-deed': 'Sonstige elektronische Eigenurkunde',
      'uvz-documents-doctype-other-el-doc': 'Sonstiges elektronisches Dokument'
    },
    miscellaneousTerms: {
      'uvz-documents-signaturestatus-missing': 'fehlt',
      'uvz-documents-signaturestatus-existing': 'vorhanden',
      'uvz-documents-signaturestatus-not-required': 'nicht erforderlich',
      'uvz-documents-signaturestatus-defective': 'ungültig',
      'uvz-documents-no-refusal-note': 'Keine Zurückweisungsnotiz hinterlegt'
    },
    noteButtonLabels: {
      'uvz-documents-note-button-label-add': 'hinzufügen',
      'uvz-documents-note-button-label-edit': 'bearbeiten',
    },
    errors: {

    },
    hoverBoxLabels: {
      'uvz-documents-hoverbox-signature-validatcreation-title': 'Gültigkeit beim Erstellen',
      'uvz-documents-hoverbox-signature-dateofsignature-title': 'Datum der Signatur',
      'uvz-documents-hoverbox-signature-signingperson-title': 'Name der signierenden Person',
      'uvz-documents-hoverbox-signature-cryptographicallycorrect-title': 'Kryptografisch korrekt',
      'uvz-documents-hoverbox-signature-validatcreation-true': 'gültig',
      'uvz-documents-hoverbox-signature-validatcreation-false': 'ungültig',
      'uvz-documents-hoverbox-signature-cryptographicallycorrect-true': 'ja',
      'uvz-documents-hoverbox-signature-cryptographicallycorrect-false': 'nein',
      'uvz-documents-hoverbox-note-doctyperequired': 'Bitte Dokumententyp setzen, um einen Vermerk hinzuzufügen',
      'uvz-documents-hoverbox-note-notrequired': 'Vermerk nicht erforderlich',
      'uvz-documents-hoverbox-default-refusal-note': 'Keine Zurückweisungsnotiz hinterlegt',
      'uvz-documents-hoverbox-maindocumentaddbutton': `Es kann nur ein Hauptdokument geben.
      Löschen Sie das aktuelle Hauptdokument um ein neues hinzufügen.`,
      'uvz-documents-hoverbox-refusal-active': 'Dokument zurückweisen',
      'uvz-documents-hoverbox-refusal-inactive': 'Nur Dokumente im Status "Zu signieren" können zurückgewiesen werden.'
    },
    deleteDocumentModal: {
      'button-ok': 'OK',
      'button-cancel': 'Abbrechen',
      'uvz-documents-delete-confirmationdialogue-title': 'Dokument löschen',
      'uvz-documents-dialogue-issue-documentcopy-title': 'Abschrift erstellen',
      'uvz-documents-dialogue-issue-documentcopy-copytype-title': 'Art der Abschrift',
      'uvz-documents-delete-confirmationdialogue-text':
        'Möchten Sie das Dokument {{documentTitle}} aus dem UVZ-Eintrag ' +
        '{{uvzNumber}} endgültig löschen?'
    }
  }
};
